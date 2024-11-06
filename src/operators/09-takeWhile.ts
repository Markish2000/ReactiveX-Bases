import { fromEvent, map, takeWhile } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150)

    // ** Al poner el "true" significa que es inclusive.
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (value) => console.log('Next:', value),
    complete: () => console.log('Complete.'),
  });
