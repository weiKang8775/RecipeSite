import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService implements OnInit {
  ingredients: Ingredient[] = [];
  newIngredientsEmitter = new EventEmitter<Ingredient[]>();
  editIngredientSubject = new Subject<Ingredient>();
  updateIngredientSubject = new Subject<Ingredient[]>();

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