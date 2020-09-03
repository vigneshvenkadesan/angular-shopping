import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Samosa', 'A triangular masala stuffed snack', 'https://i.ndtvimg.com/i/2018-02/moong-dal-samosa_620x330_51517923256.jpg'),
    new Recipe('Pizza', 'Pizza is a savory dish of Italian origin consisting of a usually round', 'https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
