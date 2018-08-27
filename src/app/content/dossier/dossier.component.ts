import {Component, OnDestroy, OnInit} from '@angular/core';
import {UnitTime} from './unit-time';
import {PersonalDataService} from '../personal-data.service';


@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit, OnDestroy {

  remainingTime: string;
  birthday: Date;

  private lastLessonAngular: Date; // дата окончания курса по Angular
  private timer: number;

  constructor(private personalDataService: PersonalDataService) {
    this.birthday = new Date(parseInt(this.personalDataService.getIt('birthday')));
    this.lastLessonAngular = new Date(2018, 8, 13, 19, 30);
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
