import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('Next [next]:', value),
  error: (error) => console.error('Error [obs]:', error),
  complete: () => console.info('Complete [obs].'),
};

const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');

  const a = undefined;

  a.nombre = 'Marcos';
  subs.complete();
});
