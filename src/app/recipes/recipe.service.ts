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

  // Returns a copy of the stored recipes
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  // Returns an instance of Recipe with the
  // Given id or null if no id matches the
  // id of stored recipes
  find(id: number): Recipe {

    for (let recipe of this.recipes) {
      if (recipe.id === id) {
        return recipe;
      }
    }

    return null;
    
  }

  // Called after editing a recipe
  save(recipe: Recipe) {

    const target = this.find(recipe.id);

    if (recipe.name !== '' && recipe.description !== '' && target) {
      target.name = recipe.name;
      target.description = recipe.description;
      target.ingredients = recipe.ingredients;
    }

  }

  // Used for new 
  add(newRecipe: Recipe) {

    this.recipes.push(newRecipe);
    this.newRecipeEmitter.emit(newRecipe);

  }
}