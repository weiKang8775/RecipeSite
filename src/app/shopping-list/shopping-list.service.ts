import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService{
  ingredients: Ingredient[] = [
    new Ingredient("Flour", 10, "g"),
    new Ingredient("Apple", 3)
  ];
  addIngredient = new EventEmitter<Ingredient>();

  constructor() {
    this.addIngredient.subscribe((newIngredient: Ingredient) => {
      this.ingredients.push(newIngredient);
    })
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
}