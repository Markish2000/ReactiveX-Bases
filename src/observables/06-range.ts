import { asyncScheduler, range } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('Inicio.');
src$.subscribe(console.log);
console.log('Fin.');
