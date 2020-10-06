import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService{
  private recipes: Recipe[] = 
  [
    new Recipe("Pasta", "Best Pasta", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28055/recipe-book-clipart-md.png", [new Ingredient("Flour", 10, "g"), new Ingredient("Water", 500, "ml")]),
    new Recipe("Ramen", "Best Ramen", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28055/recipe-book-clipart-md.png", [new Ingredient("Flour", 10, "g"), new Ingredient("Water", 500, "ml")])
  ];
  constructor() {

  }

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

}