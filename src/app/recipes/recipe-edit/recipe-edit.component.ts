import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  ingredientForm: FormGroup;
  ingredientMode: string = "add";
  recipeIngredients: Ingredient[];
  recipeId: number;
  ingredientSelected: Ingredient;

  constructor(private route: ActivatedRoute, private rs: RecipeService, private router: Router) {

  }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      'recipeName': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
    this.ingredientForm = new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, this.greaterThanZero]),
      'unit': new FormControl(null)
    })
    this.route.params.subscribe((params: Params) => {
      const recipe = this.rs.find(+params['id']);
      this.recipeIngredients = recipe.ingredients.slice();
      this.recipeId = recipe.id;
      this.recipeForm.setValue({
        'recipeName': recipe.name,
        'description': recipe.description
      });
    });
  }

  addIngredient() {
    if (this.ingredientForm.valid) {
      if (this.ingredientSelected) {
        this.ingredientSelected.name = this.ingredientForm.value.ingredientName;
        this.ingredientSelected.amount = +this.ingredientForm.value.amount;
        this.ingredientSelected.unit = this.ingredientForm.value.unit;
        this.ingredientSelected = null;
      } else {
        this.recipeIngredients.push(new Ingredient(this.ingredientForm.value.ingredientName, this.ingredientForm.value.amount, this.ingredientForm.value.unit));
      }
      this.ingredientMode = "add";
      this.ingredientForm.reset();
    }
  }

  editIngredient(selected: Ingredient) {
    this.ingredientForm.setValue({
      'ingredientName': selected.name,
      'amount': selected.amount,
      'unit': selected.unit
    });
    this.ingredientMode = "update";
    this.ingredientSelected = selected;
  }

  saveRecipe() {
    this.rs.save(new Recipe(this.recipeForm.value.recipeName, this.recipeForm.value.description, this.recipeIngredients, this.recipeId));
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  greaterThanZero(control: FormControl): { [s: string]: boolean } {
    return parseInt(control.value) <= 0 ? { 'invalidAmount': true} : null;
  }
}
