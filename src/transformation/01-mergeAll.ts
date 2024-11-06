import { debounceTime, fromEvent, map, pluck, mergeAll } from 'rxjs';

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

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    pluck('target', 'value'),
    map((text) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    mergeAll(),
    pluck('items')
  )
  .subscribe(showUsers);
