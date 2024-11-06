import { fromEvent, map, pluck, mapTo } from 'rxjs';

// range(1, 5)
//   .pipe(map<number, string>((value) => (value * 30).toString()))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(map((event) => event.code));

const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI'));

const keyupMapTo$ = keyup$.pipe(mapTo('Tecla presionada.'));

keyup$.subscribe(console.log);
keyupCode$.subscribe((code) => console.log('Map', code));
keyupPluck$.subscribe((pluck) => console.log('Map', pluck));
keyupMapTo$.subscribe((pluck) => console.log('MapTo', pluck));
