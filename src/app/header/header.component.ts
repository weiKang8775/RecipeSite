import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    constructor(private ns: NavigationService) {

    }
    ngOnInit() {

    }

    getSelected(selected: string) {
        this.ns.pageSelected.emit(selected);
    }
}