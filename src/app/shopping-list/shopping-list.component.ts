import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Eggs', 2),
        new Ingredient('Cacao', 1)
    ]

    constructor() {}
    ngOnInit(): void {}

    onIngredientAdded (ingredient: any) {
      console.log("addingnew ingredient");
      this.ingredients.push(ingredient);
    }

}
