import { map, range, tap } from 'rxjs';

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((x) => console.log('Antes', x)),
    map((value) => value * 10),
    tap({
      next: (value) => console.log('Next:', value),
      complete: () => console.log('Complete.'),
    })
  )
  .subscribe((value) => console.log('subs', value));
