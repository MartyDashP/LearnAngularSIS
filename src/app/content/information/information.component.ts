import {Component, OnDestroy, OnInit} from '@angular/core';
import {ItemOfPersonalData} from './item-of-personal-data';
import {Education} from './personal-data';
import {PersonalDataService} from '../personal-data.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  itemsOfData: ItemOfPersonalData[] = [];
  education: Education;
  birthday: Date;
  avatar: string;

  private jsonData: any;

  constructor(private personalDataService: PersonalDataService) {
    this.jsonData = personalDataService.getData();
    this.avatar = this.jsonData.avatar;
    this.education = new Education(
      this.jsonData.education.title,
      this.jsonData.education.institution,
      this.jsonData.education.type,
      this.jsonData.education.rank
    )
    this.birthday = new Date(parseInt(this.jsonData.birthday, 10));

    this.makeAListData();
  }

  private makeAListData = (): void => {
    this.itemsOfData.push(new ItemOfPersonalData('ФИО', this.jsonData.fullName));
    this.itemsOfData.push(new ItemOfPersonalData('Дата рождения', this.getStandartDate(this.birthday));
    this.itemsOfData.push(new ItemOfPersonalData('Образование', this.education.getTypeEducation()));
    this.itemsOfData.push(new ItemOfPersonalData('Специальность', this.education.getSpecialty()));
    this.itemsOfData.push(new ItemOfPersonalData('Контактный телефон', this.jsonData.phoneNumber));
  }

  private getStandartDate = (date: Date): string  => {
    let day = date.getDate();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    return day + '.' + month + '.' + year;
  }

  ngOnInit() {
  }

}
