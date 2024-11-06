import { filter, from, fromEvent, map, range } from 'rxjs';

// range(1, 10)
//   .pipe(filter((value) => value % 2 === 1))
//   .subscribe(console.log);

range(20, 30).pipe(filter((value, index) => value % 2 === 1));
// .subscribe(console.log);

interface Character {
  type: string;
  name: string;
}

const characters: Character[] = [
  {
    type: 'Hero',
    name: 'Batman',
  },
  {
    type: 'Hero',
    name: 'Robin',
  },
  {
    type: 'Villain',
    name: 'Joker',
  },
];

from(characters)
  .pipe(filter((character) => character.type === 'Hero'))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code),
  filter((key) => key === 'Enter')
);
keyup$.subscribe(console.log);
