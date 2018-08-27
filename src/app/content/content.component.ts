import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageSelectorService } from '../page-selector.service';
import { PersonalDataService } from './personal-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ PersonalDataService ]
})
export class ContentComponent implements OnInit {

  constructor(public pageSelectorService: PageSelectorService) { }

  ngOnInit() {
  }

}
