import { of, take, tap } from 'rxjs';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
  .pipe(
    tap((value) => console.log('Tap:', value)),
    take(3)
  )
  .subscribe({
    next: (value) => console.log('Next:', value),
    complete: () => console.log('Complete.'),
  });
