import { interval, reduce, take } from 'rxjs';

interval(500)
  .pipe(
    take(6),
    reduce((acc, curr) => acc + curr, 0)
  )
  .subscribe({
    next: (value) => console.log('Next:', value),
    complete: () => console.log('Complete.'),
  });
