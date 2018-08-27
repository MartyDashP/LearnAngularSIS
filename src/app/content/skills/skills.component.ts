import { Component, OnInit } from '@angular/core';
import {PersonalDataService} from '../personal-data.service';
import {forEach} from '../../../../node_modules/@angular/router/src/utils/collection';

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
  flagError: boolean;

  constructor(private personalDataService: PersonalDataService) {
    this.newSkill = '';
    this.flagError = false;
    this.skills = this.personalDataService.getIt('skills');

    if (localStorage.getItem(TITLE_LOCAL_STORAGE) !== null)
      this.localSkills = JSON.parse(localStorage.getItem(TITLE_LOCAL_STORAGE));
    else
      this.localSkills = [];
  }

  public addSkill = (): void => {
    this.flagError = !this.isUniqueSkill();
    if (this.newSkill !== '' && !this.flagError) {
      this.rememberSkill();
      this.newSkill = '';
    }
  }

  private isUniqueSkill = (): boolean => (!this.skills.includes(this.newSkill) && !this.localSkills.includes(this.newSkill));

  private rememberSkill = () => {
    this.localSkills.push(this.newSkill);
    localStorage.setItem(TITLE_LOCAL_STORAGE, JSON.stringify(this.localSkills));
  }

  ngOnInit() {
  }

}
