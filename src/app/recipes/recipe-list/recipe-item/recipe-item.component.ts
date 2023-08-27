import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input()  recipeProp!: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  onSelect() {
    this.recipeSelected.emit(this.recipeProp);
  }  
}
