export class Survey {
  private _name: string;
  private _lastName: string;
  private _age:number;
  private _phoneNumber:number;
  private _country: string;
  private _animal: string;
  private _holidayPlace: string;
  private _acceptTerms: boolean;
  private _user: string;
  private _date: Date;


  constructor(name: string, lastName: string, age: number, phoneNumber: number, country: string, animal: string, holidayPlace: string, acceptTerms: boolean, user: string, date: Date) {
    this._name = name;
    this._lastName = lastName;
    this._age = age;
    this._phoneNumber = phoneNumber;
    this._country = country;
    this._animal = animal;
    this._holidayPlace = holidayPlace;
    this._acceptTerms = acceptTerms;
    this._user = user;
    this._date = date;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get phoneNumber(): number {
    return this._phoneNumber;
  }

  set phoneNumber(value: number) {
    this._phoneNumber = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get animal(): string {
    return this._animal;
  }

  set animal(value: string) {
    this._animal = value;
  }

  get holidayPlace(): string {
    return this._holidayPlace;
  }

  set holidayPlace(value: string) {
    this._holidayPlace = value;
  }

  get acceptTerms(): boolean {
    return this._acceptTerms;
  }

  set acceptTerms(value: boolean) {
    this._acceptTerms = value;
  }

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
