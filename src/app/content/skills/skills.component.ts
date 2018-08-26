import { Component, OnInit } from '@angular/core';
import {PersonalDataService} from '../personal-data.service';

const TITLE_LOCAL_STORAGE: string = 'localSkills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: string[];
  newSkill: string;
  localSkills: any;

  constructor(private personalDataService: PersonalDataService) {
    this.newSkill = '';
    this.skills = this.personalDataService.getIt('skills');

    if(localStorage.getItem(TITLE_LOCAL_STORAGE) !== null)
      this.localSkills = JSON.parse(localStorage.getItem(TITLE_LOCAL_STORAGE));
    else
      this.localSkills = [];
  }

  public addSkill = (): void => {
    if (this.newSkill !== '') {
      this.rememberSkill();
      this.skills.push(this.newSkill);
      this.newSkill = '';
    }
  }

  private rememberSkill = () => {
    this.localSkills.push(this.newSkill);
    localStorage.setItem(TITLE_LOCAL_STORAGE, JSON.stringify(this.localSkills));
  }

  ngOnInit() {
  }

}
