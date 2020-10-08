import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [];

  constructor(private sls: ShoppingListService) {
    sls.newIngredientsEmitter.subscribe((newIngredients: Ingredient[]) => {
      this.addIngredients(...newIngredients);
    });
    this.ingredients = sls.getIngredients();
  }

  addIngredients(...newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
  }
}
