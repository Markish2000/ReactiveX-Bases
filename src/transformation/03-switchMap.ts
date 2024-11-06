import { debounceTime, fromEvent, pluck, mergeMap, switchMap } from 'rxjs';

import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

const showUsers = (users) => {
  console.log(users);
  orderList.innerHTML = '';

  for (const user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
};

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck('target', 'value'),
  mergeMap((text) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
  ),
  pluck('items')
);

const url = 'https://httpbin.org/delay/1?arg=';

input$
  .pipe(
    pluck('target', 'value'),
    switchMap((text) => ajax.getJSON(url + text))
  )
  .subscribe(console.log);
