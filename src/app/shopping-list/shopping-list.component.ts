import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  newSub: Subscription;

  ingredients: Ingredient[] = [];

  constructor(private sls: ShoppingListService) {
    this.newSub = sls.newIngredientsEmitter.subscribe((newIngredients: Ingredient[]) => {
      this.addIngredients(...newIngredients);
    });
    this.ingredients = sls.getIngredients();
  }

  ngOnInit() {

  }

  addIngredients(...newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
  }

  editIngredient(selected: Ingredient) {
    this.sls.editIngredientSubject.next(selected);
  }

  ngOnDestroy() {
    this.newSub.unsubscribe();
  }
}
