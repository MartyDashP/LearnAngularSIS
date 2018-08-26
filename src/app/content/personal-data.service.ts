import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  private dataJSON: any = {
    fullName: 'Мартынов  Павел Владимирович',
    birthday: '779846400000',
    education: {
      title: 'Информатика и вычислительная техника',
      institution: 'СибГУ',
      type: 'Высшие',
      rank: 'Бакалавр'
    },
    phoneNumber: '+7-923-333-27-45',
    avatar: 'assets/imgs/avatar.jpg',
    skills: [
      'Управление временем',
      'Решать проблемы'
    ]
  };

  constructor() { }

  public getData = () => {
    return this.dataJSON;
  }

  public getIt = (param: string): any => {
    return this.dataJSON[param];
  }
}
