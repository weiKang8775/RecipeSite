import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService implements OnInit {
  ingredients: Ingredient[] = [];
  newIngredientsEmitter = new EventEmitter<Ingredient[]>();

  constructor() {
  }

  ngOnInit() {

  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredients(...ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientsEmitter.emit(ingredients);
  }
}