import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('The first recipe',
      'This is first descr',
      'https://i.pinimg.com/736x/0d/66/6a/0d666a436223d6320df5e673ab3722ef.jpg'),
    new Recipe('The second recipe',
      'This is second descr',
      'https://www.macheesmo.com/wp-content/uploads/2010/02/Kidney-Bean-Soup.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
