import {Component, OnInit, Output, ViewChild, EventEmitter, ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('amountInput') amountInput: ElementRef | undefined;
  @ViewChild('nameInput') nameInput: ElementRef | undefined;

  onAddIngredient() {
    console.log('this.nameInput: ', this.nameInput);
    if (this.nameInput && this.amountInput &&
        this.nameInput.nativeElement.value && this.amountInput.nativeElement.value) {
      this.ingredientAdded.emit(new Ingredient(
        this.nameInput.nativeElement.value,
        +this.amountInput.nativeElement.value
      ));
    }
  }
}
