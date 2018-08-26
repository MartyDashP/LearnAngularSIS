import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageSelectorService {
  private page: string;

  constructor() {
    this.page = 'information';
  }

  getTypePage = (): string => {
    return this.page;
  }

  setTypePage = (page: string): void  => {
    this.page = page;
  }
}
