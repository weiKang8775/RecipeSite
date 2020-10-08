import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private route: ActivatedRoute, private rs: RecipeService, private router: Router, private sls: ShoppingListService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id: number = +params['id'];
      this.recipe = this.rs.find(id);
    })
  }

  toShoppingList() {
    this.sls.addIngredients(...this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

}
