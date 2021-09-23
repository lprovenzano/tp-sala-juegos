import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hanged',
  templateUrl: './hanged.component.html',
  styleUrls: ['./hanged.component.scss']
})
export class HangedComponent implements OnInit {

  basePathImage = '/assets/images/games/hanged/hanged_';
  imageFormat = '.png';
  imagesName: string[] = [];
  keyboard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  attempts = 7;
  unknownWord: any[] = [];
  hiddenWord = '';
  usedLetters: string[] = [];
  badgeClue = false;
  clueMessage = '';
  lockClue = false;
  win = false;
  availableWords = [
    {
      word: 'MANZANA',
      clue: 'Es una fruta...'
    },
    {
      word: 'PERA',
      clue: 'Es una fruta...'
    },
    {
      word: 'NARANJA',
      clue: 'Es una fruta...'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.unknownWord.push(this.getRandomWord());
    this.getUnknownHiddenWord();
  }

  generateImages(attempt: number): void {
    if (attempt < 0) {
      return;
    }
    const image = `${this.basePathImage}${attempt}${this.imageFormat}`;
    this.imagesName.push(image);
  }

  getRandomWord(): any {
    return this.availableWords[Math.floor(Math.random() * this.availableWords.length)];
  }

  getUnknownHiddenWord(): void {
    this.delay(500);
    const hiddenWord: string[] = [];
    for (const letter of this.unknownWord[0].word) {
      hiddenWord.push('_');
    }
    this.hiddenWord = hiddenWord.join('');
  }

  delay(ms: number): any {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  try(letter: string): void {
    this.usedLetters.unshift(letter);
    const result = this.matchLetter(letter);
    if (result[0].match) {
      for (const position of result[0].positions) {
        this.swap(letter, position);
      }
    } else {
      this.attempts--;
      this.generateImages(this.attempts);
    }
    this.evaluate();
  }

  shouldDisableLetter(letter: string): boolean {
    return this.usedLetters.includes(letter);
  }

  private matchLetter(letter: string): any {
    const matches = [];
    if (this.unknownWord[0].word.indexOf(letter) > -1) {
      const indexes = [];
      const words = [...this.unknownWord[0].word];
      for (let i = 0; i < words.length; i++) {
        if (words[i] === letter) {
          indexes.push(i);
        }
      }
      matches.push({
        match: true,
        positions: indexes
      });
    } else {
      matches.push({
        match: false
      });
    }
    return matches;
  }

  private swap(letter: string, position: number): void {
    const wordChars = [...this.hiddenWord];
    wordChars[position] = letter;
    this.hiddenWord = wordChars.join('');
  }

  showBadgeClue(): void {
    this.badgeClue = true;
  }

  giveClue(): void {
    this.attempts--;
    this.lockClue = true;
    this.badgeClue = !this.badgeClue;
    this.clueMessage = this.unknownWord[0].clue;
  }

  private evaluate(): void {
    if ([...this.hiddenWord].indexOf('_') < 0 && this.attempts > 0) {
      this.win = true;
    }
    if (this.attempts === 0 && [...this.hiddenWord].indexOf('_') > -1) {
      console.error('LOST!!!');
    }
  }
}
