import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(new Recipe("Pasta", "Best Pasta", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28055/recipe-book-clipart-md.png"));
    this.recipes.push(new Recipe("Ramen", "Best Ramen", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28055/recipe-book-clipart-md.png"));
  }

  ngOnInit(): void {
    
  }
}
