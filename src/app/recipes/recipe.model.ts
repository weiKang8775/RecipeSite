import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  static id: number = 1;
  id: number;
  constructor(public name: string, public description: string, public ingredients: Ingredient[], id?: number, public imagePath: string = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28055/recipe-book-clipart-md.png") {
    if (id) {
      this.id = id;
    } else {
      this.id = Recipe.id++;
    }
  }
}