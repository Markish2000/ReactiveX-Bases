import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('Next [next]:', value),
  error: (error) => console.error('Error [obs]:', error),
  complete: () => console.info('Complete [obs].'),
};

const intervalo$ = new Observable<number>((subscriber) => {
  let count: number = 0;

  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido.');
  };
});

const subs1: Subscription = intervalo$.subscribe(observer);
const subs2: Subscription = intervalo$.subscribe(observer);
const subs3: Subscription = intervalo$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
  subs1.unsubscribe();

  console.log('Completado timeout.');
}, 3000);
