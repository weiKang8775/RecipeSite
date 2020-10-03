import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationService]
})
export class AppComponent {
  title = 'RecipeSite';
  currentPage = 'home';

  constructor(private ns: NavigationService) {
    ns.pageSelected.subscribe((selected: string) => {
      this.currentPage = selected;
    })
  }

  changeCurrentPage(selected: string) {
    this.currentPage = selected;
  }
}
