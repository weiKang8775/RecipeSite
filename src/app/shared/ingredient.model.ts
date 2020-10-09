export class Ingredient {
  static id: number = 1;
  id: number;
  constructor(public name: string, public amount: number, public unit: string = "", id?: number) {
    if (id) {
      this.id = id;
    } else {
      this.id = Ingredient.id++;
    }
  }
}