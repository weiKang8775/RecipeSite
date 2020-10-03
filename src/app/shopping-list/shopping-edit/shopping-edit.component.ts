import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private sls: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement, unit: HTMLInputElement) {
    this.sls.addIngredient.emit(new Ingredient(name.value, +amount.value, unit.value));
  }
}
