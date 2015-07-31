export default function(done) {
  if (typeof Promise === 'undefined') {
    require(['es6-promise'], function(es6Promise) {
      es6Promise.polyfill();
      done();
    });
  } else {
    setTimeout(done, 0);
  }
}
