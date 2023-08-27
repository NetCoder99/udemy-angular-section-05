import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit{
    @Output() recipeListItemSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Brownie Recipe 1','My first brownie recipe!','/assets/brownie-001.jpg'),
        new Recipe('Brownie Recipe 2','My second brownie recipe.','/assets/brownie-002.jpg'),
        new Recipe('Brownie Recipe 3','My third brownie recipe!','/assets/brownie-003.jpg')
    ];

    constructor() {}
    ngOnInit(): void {}

    onRecipeSelected(slctRecipe: Recipe) {
      this.recipeListItemSelected.emit(slctRecipe);
    }
}
