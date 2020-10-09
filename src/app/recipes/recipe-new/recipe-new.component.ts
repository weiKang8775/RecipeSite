import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  newRecipeName: string;
  newRecipeDescription: string;
  newRecipeIngredients: Ingredient[] = [];

  constructor(private rs: RecipeService) { }

  ngOnInit(): void {
  }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement, unit: HTMLInputElement) {
    this.newRecipeIngredients.push(new Ingredient(name.value, +amount.value, unit.value));
  }

  addRecipe() {
    const newRecipe = new Recipe(this.newRecipeName, this.newRecipeDescription, this.newRecipeIngredients);
    this.rs.add(new Recipe(this.newRecipeName, this.newRecipeDescription, this.newRecipeIngredients));
  }
}
