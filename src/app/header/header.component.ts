import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    @Output() getPage = new EventEmitter<string>();
    constructor() {

    }
    ngOnInit() {

    }

    getSelected(selected: string) {
        this.getPage.emit(selected);
    }
}