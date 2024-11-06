import { from, of } from 'rxjs';

const observer = {
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete.'),
};

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const myIterable = myGenerator();
from(myIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('Marcos');
// const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async (resp) => {
//   const dataResp = await resp.json();
// });

// source$.subscribe(observer);
