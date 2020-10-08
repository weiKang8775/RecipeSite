import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

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
    if (name.value !== '' && (amount.value !== '' && +amount.value > 0)) {
      const newIngredient: Ingredient = new Ingredient(name.value, +amount.value, unit.value);
      this.sls.addIngredients(newIngredient);
    }
  }
}
