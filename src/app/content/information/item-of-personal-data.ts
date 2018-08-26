export class ItemOfPersonalData {
  readonly fieldTitle: string;
  readonly value: string;

  constructor(fieldTitle: string, value: string) {
    this.fieldTitle = fieldTitle;
    this.value = value;
  }

  getFullItem = (): string => {
    return this.fieldTitle + ': ' + this.value;
  }
}
