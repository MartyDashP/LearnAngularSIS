import { Component, OnInit } from '@angular/core';
import {PageSelectorService} from '../page-selector.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public pageSelectorService: PageSelectorService) { }

  ngOnInit() {
  }

}
