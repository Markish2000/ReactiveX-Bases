import { distinct, from, of } from 'rxjs';

const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

numbers$.pipe(distinct()).subscribe(console.log);

interface Character {
  name: string;
}

const characters: Character[] = [
  { name: 'Mega Man' },
  { name: 'X' },
  { name: 'Zero' },
  { name: 'Dr. Willy' },
  { name: 'X' },
  { name: 'Mega Man' },
  { name: 'Zero' },
];

from(characters)
  .pipe(distinct((character) => character.name))
  .subscribe(console.log);
