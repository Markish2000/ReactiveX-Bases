import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const handleError = (resp: AjaxError) => {
  console.warn('Error:', resp.message);

  return of({ ok: false, users: [] });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(catchError(handleError)).subscribe({
  next: (value) => console.log('Next:', value),
  error: (err) => console.warn('Error:', err),
  complete: () => console.log('Complete'),
});
obs2$.pipe(catchError(handleError)).subscribe({
  next: (value) => console.log('Next:', value),
  error: (err) => console.warn('Error:', err),
  complete: () => console.log('Complete'),
});
