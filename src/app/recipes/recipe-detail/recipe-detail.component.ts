import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private route: ActivatedRoute, private rs: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id: number = +params['id'];
      this.recipe = this.rs.find(id);
    })
  }

}
