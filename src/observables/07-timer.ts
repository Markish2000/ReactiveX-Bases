import { timer } from 'rxjs';

const observer = {
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete.'),
};

const todayIn5 = new Date();
todayIn5.setSeconds(todayIn5.getSeconds() + 5);

const timer$ = timer(todayIn5);

console.log('Inicio.');
timer$.subscribe(observer);
console.log('Fin.');
