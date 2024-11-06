import { of } from 'rxjs';

const obs$ = of<number[]>(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);

console.log('Inicio del Obs$.');

obs$.subscribe({
  next: (value) => console.log('Next:', value),
  complete: () => console.log('Complete.'),
});

console.log('Fin del Obs$.');
