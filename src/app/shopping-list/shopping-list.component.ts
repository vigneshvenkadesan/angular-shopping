import { Component, OnInit } from '@angular/core';
import {Ingridient} from './shared/ingredients.component'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[]=[
    new Ingridient('Tomato',10),
    new Ingridient('Potato',10)

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
