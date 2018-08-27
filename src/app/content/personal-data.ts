export class Education {

  readonly title: string;
  readonly institution: string;
  readonly type: string;
  readonly rank: string;

  constructor(title: string, institution: string, type: string, rank: string) {
    this.title = title;
    this.institution = institution;
    this.type = type;
    this.rank = rank;
  }

  getSpecialty = (): string => (this.title + ' (' + this.institution + ')');
  getTypeEducation = (): string => (this.type + ' (' + this.rank + ')');

}

export class PersonalData {
  readonly fullName: string;
  readonly birthday: Date;
  readonly education: string;
  readonly specialty: string;
  readonly phoneNumber: string;
  readonly fullNumYears: number;

  constructor(personalData: any) {
    this.fullName = personalData.fullName;
    this.birthday = personalData.birthday;
    this.education = personalData.education.getTypeEducation();
    this.specialty = personalData.education.getSpecialty();
    this.phoneNumber = personalData.phoneNumber;
    this.fullNumYears = this.getFullNumYears();
  }

  private getFullNumYears = (): number => {
    let now: Date = new Date();
    let amtYears: number = now.getFullYear() - this.birthday.getFullYear();

    if((now.getMonth() < this.birthday.getMonth()) ||
      (now.getMonth() == this.birthday.getMonth() && now.getDate() < this.birthday.getDate())) {
      amtYears--;
    }
    return amtYears
  }

}
