import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AppRoutesModule } from './app-routes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    ErrorPageComponent,
    RecipeNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
