import { Component, OnInit } from '@angular/core';
import {PersonalDataService} from '../personal-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: string[];
  newSkill: string;

  constructor(private personalDataService: PersonalDataService) {
    this.newSkill = '';
    this.skills = this.personalDataService.getIt('skills');
  }

  public addSkill = (): void => {
    if (this.newSkill !== '') {
      this.skills.push(this.newSkill);
      this.newSkill = '';
    }
  }

  ngOnInit() {
  }

}
