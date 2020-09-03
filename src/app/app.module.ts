import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepies/recepie-item/recepie-item.component';
import { RecepieDetailsComponent } from './recepies/recepie-details/recepie-details.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, ShoppingListComponent, RecepiesComponent, RecipeListComponent, RecepieItemComponent, RecepieDetailsComponent, ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
