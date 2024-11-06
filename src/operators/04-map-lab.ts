import { fromEvent, map } from 'rxjs';

const text = document.createElement('div');

text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat magna at orci malesuada tincidunt. Fusce pharetra elit elementum eleifend elementum. Mauris libero sem, tempor a aliquet sed, venenatis non arcu. Vivamus condimentum elit posuere arcu venenatis facilisis. Vestibulum fermentum tempus sodales. Nunc maximus neque vehicula placerat consequat. Cras interdum, ante ut viverra cursus, nunc arcu suscipit ligula, id feugiat orci ante ut dolor. Cras luctus rhoncus diam sit amet tempus.
<br /> <br />
Suspendisse consectetur viverra velit, eget vestibulum nulla commodo ac. Vestibulum nec fermentum eros. In vel rhoncus justo. Fusce quis ultricies diam. Proin finibus congue mattis. Suspendisse vel massa in felis sollicitudin porta eget et erat. Phasellus blandit bibendum sapien, consectetur maximus neque pretium quis. Vivamus interdum, sapien vel pharetra dignissim, justo massa suscipit nisi, vitae auctor nibh nisl pellentesque arcu. Maecenas rhoncus justo lectus, non lacinia neque ullamcorper at. Mauris lacinia quis ante nec efficitur. Integer at ex consequat diam porttitor ultrices. Etiam mollis tortor ac eros faucibus interdum. Curabitur blandit turpis diam, quis maximus ex venenatis et. Quisque vehicula orci eget efficitur tempus.
<br /> <br />
Pellentesque vehicula sit amet orci ac dictum. Maecenas magna enim, bibendum vel sollicitudin sit amet, commodo a odio. Cras quis orci diam. Cras sit amet mi in lacus pellentesque scelerisque in in sapien. Pellentesque aliquet ante eu turpis scelerisque cursus. Praesent tincidunt laoreet augue quis ornare. Suspendisse auctor fringilla nulla blandit vestibulum. Morbi pellentesque, metus interdum facilisis volutpat, est neque porta turpis, id faucibus ipsum lacus sit amet nibh. Praesent condimentum tempus orci sed sodales. Curabitur ligula nibh, condimentum sit amet commodo ac, congue sed sapien. Vivamus neque risus, luctus quis eleifend nec, hendrerit sed justo. Aenean neque lacus, consequat ac finibus a, congue ac sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Curabitur ullamcorper fermentum est, non varius metus.
<br /> <br />
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed auctor elementum finibus. Aenean maximus eleifend posuere. Curabitur venenatis eget justo et eleifend. Pellentesque vehicula tempus pharetra. Pellentesque id tincidunt risus, vitae laoreet sapien. Morbi varius enim ut lacus ornare cursus.
<br /> <br />
Curabitur ullamcorper sagittis est id facilisis. Morbi consectetur et lacus id congue. Vivamus placerat dolor tortor. Cras et massa efficitur, imperdiet tortor sit amet, suscipit sapien. Aenean a cursus elit. Integer nec pellentesque libero. Phasellus vestibulum faucibus neque quis auctor. Sed quam nisl, feugiat sit amet ultricies non, convallis non mauris. Fusce sagittis congue semper. Donec nec lacus at nisl facilisis iaculis. Curabitur tincidunt feugiat ullamcorper. Phasellus porta sollicitudin enim ac iaculis. Mauris sagittis congue aliquam.`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');

const calculatePercentageScroll = (event: any) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const progress$ = scroll$.pipe(
  map((event) => calculatePercentageScroll(event))
);

progress$.subscribe((percentage) => {
  progressBar.style.width = `${percentage}%`;
});
