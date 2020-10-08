import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private rs: RecipeService, private router: Router, private route: ActivatedRoute) {
    rs.newRecipeEmitter.subscribe((newRecipe: Recipe) => {
      this.recipes.push(newRecipe);
      router.navigate(['/recipes', newRecipe.id]);
    });
  }

  ngOnInit(): void {
    this.recipes = this.rs.getRecipes();
  }

  getSelectedRecipe(recipe: Recipe) {
    this.router.navigate([recipe.id], { relativeTo: this.route })
  }
}
