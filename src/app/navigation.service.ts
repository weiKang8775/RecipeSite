import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class NavigationService {
  constructor() {}
  pageSelected = new EventEmitter<string>();
}