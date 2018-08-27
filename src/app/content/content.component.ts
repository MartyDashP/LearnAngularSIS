import { Component, OnInit, OnDestroy } from '@angular/core';
import { Education, PersonalData} from "./personal-data";
import { UnitTime } from "./unit-time";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  personalData: PersonalData;
  remainingTime: string;

  private lastLessonAngular: Date; //дата окончания курса по Angular
  private timer: number;

  constructor() {
    this.personalData = new PersonalData({
      fullName: 'Мартынов  Павел Владимирович',
      birthday: new Date(1994,8,18),
      education: new Education(
        'Информатика и вычислительная техника',
        'СибГУ',
        'Высшие',
        'Бакалавр'),
      phoneNumber: '+7-923-333-27-45',
    });
    this.lastLessonAngular = new Date(2018, 8, 13, 19, 30);
    //this.remainingTime = this.getRemainingTime();
  }

  private getRemainingTime = (): string => {
    let delta: number = this.lastLessonAngular.getTime() - new Date().getTime();
    let day: UnitTime = new UnitTime(Math.floor(delta / 1000 / 60 / 60 / 24), 'Дни');
    let hour: UnitTime = new UnitTime(Math.floor((delta / 1000 / 60 / 60) - day.value * 24), 'Часы');
    let min: UnitTime = new UnitTime(
      Math.floor((delta / 1000 / 60) - day.value * 24 * 60 - hour.value * 60),
      'Минуты'
    );
    let sec: UnitTime = new UnitTime(
      Math.floor((delta / 1000) - day.value * 24 * 60 * 60 -  hour.value * 60 * 60 - min.value * 60),
      'Секунды');
    return day.getFullValue() + ', ' + hour.getFullValue() + ', ' + min.getFullValue() + ', ' + sec.getFullValue();
  }

  ngOnInit() {
    this.timer = setInterval(
      (): void => {
      this.remainingTime = this.getRemainingTime()
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }


}
