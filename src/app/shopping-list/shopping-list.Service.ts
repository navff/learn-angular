import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  private shoppingList: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Potatoes', 3)
  ];


  ingredientsChanged = new EventEmitter();

  constructor() {

  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.ingredientsChanged.emit();
  }

  getShoppingLIst() {
    return this.shoppingList.slice();
  }
}
