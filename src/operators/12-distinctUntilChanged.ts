import { distinctUntilChanged, from } from 'rxjs';

interface Character {
  name: string;
}

const characters: Character[] = [
  { name: 'Mega Man' },
  { name: 'Mega Man' },
  { name: 'Zero' },
  { name: 'Dr. Willy' },
  { name: 'X' },
  { name: 'X' },
  { name: 'Zero' },
];

from(characters)
  .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
  .subscribe(console.log);
