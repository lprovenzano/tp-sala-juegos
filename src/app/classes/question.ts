import {Answer} from './answer';

export class Question {
  id: number;
  title: string;
  options: Answer[];
  urlImage: string;

  constructor(id: number, title: string, options: Answer[], urlImage: string) {
    this.id = id;
    this.title = title;
    this.options = options;
    this.urlImage = urlImage;
  }
}
