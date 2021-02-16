import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.Service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = null;

  constructor(private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              private  recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(((value: Params) => {
      this.recipe = this.recipeService.getRecipeById(value['id']);
    }));
  }

  toShoppingListClicked(event) {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
