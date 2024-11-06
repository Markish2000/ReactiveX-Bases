import { first, fromEvent, map, tap } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap<MouseEvent>(console.log),
    map(({ clientX, clientY }) => ({ clientY, clientX })),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (value) => console.log('Next:', value),
    complete: () => console.log('Complete.'),
  });
