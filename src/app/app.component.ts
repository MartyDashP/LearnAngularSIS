import { Component } from '@angular/core';
import {PageSelectorService} from './page-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PageSelectorService]
})
export class AppComponent {
  title = 'LearnAngularSIS';
}
