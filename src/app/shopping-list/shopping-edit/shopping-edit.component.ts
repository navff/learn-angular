import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.Service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  @ViewChild('amountInput') amountInput: ElementRef | undefined;
  @ViewChild('nameInput') nameInput: ElementRef | undefined;

  onAddIngredient() {
    if (this.nameInput && this.amountInput &&
        this.nameInput.nativeElement.value && this.amountInput.nativeElement.value) {
      this.shoppingListService.addIngredient(new Ingredient(
        this.nameInput.nativeElement.value,
        +this.amountInput.nativeElement.value
      ));
    }
  }
}
