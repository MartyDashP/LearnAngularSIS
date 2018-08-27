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
