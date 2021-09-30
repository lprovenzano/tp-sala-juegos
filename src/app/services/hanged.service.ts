import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangedService {
  public availableWords = [
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
    },
    {
      word: 'FRUTILLA',
      clue: 'Es una fruta...'
    },
    {
      word: 'MANGO',
      clue: 'Es una fruta...'
    },
    {
      word: 'TIGRE',
      clue: 'Es un animal...'
    },
    {
      word: 'ELEFANTE',
      clue: 'Es un animal...'
    },
    {
      word: 'MURCIELAGO',
      clue: 'Es un animal...'
    },
    {
      word: 'RINOCERONTE',
      clue: 'Es un animal...'
    },
    {
      word: 'MILANESA',
      clue: 'Es una comida...'
    },
    {
      word: 'HAMBURGUESA',
      clue: 'Es una comida...'
    },
    {
      word: 'PIZZA',
      clue: 'Es una comida...'
    },
    {
      word: 'EMPANADA',
      clue: 'Es una comida...'
    },
    {
      word: 'LINTERNA',
      clue: 'Es un objeto...'
    },
    {
      word: 'AURICULARES',
      clue: 'Es un objeto...'
    },
    {
      word: 'COMPUTADORA',
      clue: 'Es un objeto...'
    },
    {
      word: 'PIZARRA',
      clue: 'Es un objeto...'
    }
  ];

  constructor() {
  }
}
