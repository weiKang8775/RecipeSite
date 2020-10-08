import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService{
  private recipes: Recipe[] = 
  [
    new Recipe("Pasta", "Best Pasta", [new Ingredient("Flour", 10, "g"), new Ingredient("Water", 500, "ml")]),
    new Recipe("Ramen", "Best Ramen", [new Ingredient("Flour", 10, "g"), new Ingredient("Water", 500, "ml")])
  ];
  newRecipeEmitter = new EventEmitter<Recipe>();

  constructor() {

  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  find(id: number): Recipe {
    for (let recipe of this.recipes) {
      if (recipe.id === id) {
        return recipe;
      }
    }
    return null;
  }

  save(recipe: Recipe) {
    if (recipe.name !== '' && recipe.description !== '') {
      const target = this.find(recipe.id);
      target.name = recipe.name;
      target.description = recipe.description;
      target.ingredients = recipe.ingredients;
    }
  }

  add(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.newRecipeEmitter.emit(newRecipe);
  }
}