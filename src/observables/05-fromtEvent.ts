import { fromEvent } from 'rxjs';

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(({ x, y }) => {
  console.log(x);
  console.log(y);
});

src2$.subscribe(({ key }) => {
  console.log(key);
});
