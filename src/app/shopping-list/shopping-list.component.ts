import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor() {
    this.ingredients.push(new Ingredient("Flour", 10, "g"));
    this.ingredients.push(new Ingredient("Apple", 3))
  }

  ngOnInit(): void {
  }

}
