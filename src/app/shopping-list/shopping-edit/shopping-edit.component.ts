import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  mode: string = 'add';
  addIngredientForm: FormGroup;
  ingredient: Ingredient;
  editSub: Subscription;
  constructor(private sls: ShoppingListService) { }

  ngOnInit(): void {
    this.addIngredientForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, this.greaterThanZero]),
      'unit': new FormControl(null)
    });
    this.editSub = this.sls.editIngredientSubject.subscribe((selected: Ingredient) => {
      this.addIngredientForm.setValue({
        'name': selected.name,
        'amount': selected.amount,
        'unit': selected.unit
      });
      this.ingredient = selected;
      this.mode = "update";
    });
  }

  addIngredient(name: string, amount: number, unit: string) {
    this.sls.addIngredients(new Ingredient(name, amount, unit));
  }

  editIngredient(name: string, amount: number, unit: string) {
    this.ingredient.name = name;
    this.ingredient.amount = amount;
    this.ingredient.unit = unit;
  }

  onSubmit() {
    if (this.addIngredientForm.valid) {
      if(this.mode === 'add') {
        this.addIngredient(this.addIngredientForm.value['name'], +this.addIngredientForm.value['amount'], this.addIngredientForm.value['unit']);
      } else {
        this.editIngredient(this.addIngredientForm.value['name'], +this.addIngredientForm.value['amount'], this.addIngredientForm.value['unit']);
      }
      this.addIngredientForm.reset();
      this.mode = "add";
    }
  }

  greaterThanZero(control: FormControl): { [s: string]: boolean } {
    return parseInt(control.value) <= 0 ? { 'invalidAmount': true} : null;
  }

  ngOnDestroy() {
    this.editSub.unsubscribe();
  }
}
