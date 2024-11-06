import { of, interval, fromEvent, mergeMap, take, map, takeUntil } from 'rxjs';

const letters$ = of('a', 'b', 'c');

letters$.pipe(
  mergeMap((letter) =>
    interval(1000).pipe(
      map((index) => letter + index),
      take(3)
    )
  )
);

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$))))
  .subscribe(console.log);
