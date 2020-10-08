import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [

  // Root Route
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  // Recipes Routes
  { path: 'recipes', component: RecipesComponent, children: [
    { path: 'new', component: RecipeNewComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ]},

  // Shopping List Routes
  { path: 'shopping-list', component: ShoppingListComponent },

  // Page Not Found Routes
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {

}