import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent {
  //@Output() itemAdded = new EventEmitter<{name: string, amount: number}>();  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();  
  @ViewChild('nameInput',   {static:false}) nameInputRef!: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef!: ElementRef;

  onAddItem() {
    console.log("ShoppingEditComponent:onAddItem")
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value, 
      )
    this.ingredientAdded.emit(newIngredient);
  }

}
