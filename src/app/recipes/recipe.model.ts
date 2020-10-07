import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  static id: number = 1;
  id: number;
  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[], id?: number ) {
    if (id) {
      this.id = id;
    } else {
      this.id = Recipe.id++;
    }
  }
}