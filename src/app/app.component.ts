import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeSite';
  currentPage = 'home';

  changeCurrentPage(selected: string) {
    this.currentPage = selected;
  }
}
