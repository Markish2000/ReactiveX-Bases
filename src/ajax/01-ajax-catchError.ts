import { catchError, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const handleError = (error: AjaxError) => {
  console.warn('Error:', error.message);
  return of([]);
};

ajax(url)
  .pipe(pluck('response'), catchError(handleError))
  .subscribe((users) => console.log('Users:', users));
