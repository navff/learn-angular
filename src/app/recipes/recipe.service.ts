import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(2, 'The first recipe',
      'This is first descr',
      'https://i.pinimg.com/736x/0d/66/6a/0d666a436223d6320df5e673ab3722ef.jpg',
      [new Ingredient('Морковка', 4), new Ingredient('Картошка', 61)]),
    new Recipe(3, 'The second recipe',
      'This is second descr',
      'https://www.macheesmo.com/wp-content/uploads/2010/02/Kidney-Bean-Soup.jpg',
      [new Ingredient('Морковка', 4), new Ingredient('Картошка', 61)]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes.find(x => x.id == id);
  }
}
