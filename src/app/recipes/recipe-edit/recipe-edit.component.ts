import { Component, OnInit } from '@angular/core';
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
  recipe: Recipe;
  recipeName: string;
  recipeDescription: string;
  recipeIngredients: Ingredient[];

  constructor(private route: ActivatedRoute, private rs: RecipeService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.rs.find(+params['id']);
      this.recipeName = this.recipe.name.slice();
      this.recipeDescription = this.recipe.description.slice();
      this.recipeIngredients = this.recipe.ingredients.slice();
    });
  }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement, unit: HTMLInputElement) {
    if (name.value !== '' && (amount.value !== '' && +amount.value > 0)) {
      this.recipeIngredients.push(new Ingredient(name.value, +amount.value, unit.value));
    }
  }

  saveRecipe() {
    this.rs.save(new Recipe(this.recipeName, this.recipeDescription, this.recipe.imagePath, this.recipeIngredients, this.recipe.id));
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
