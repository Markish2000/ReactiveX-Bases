import { asyncScheduler } from 'rxjs';

const greet = () => console.log('Hola Mundo');
const greet2 = (name: string) => console.log(`Hola ${name}`);

// asyncScheduler.schedule(greet, 2000);
// asyncScheduler.schedule(greet2, 2000, 'Marcos');

const subs = asyncScheduler.schedule(
  function (state) {
    console.log('state', state);

    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
