export default function(done) {
  if (typeof fetch === 'undefined') {
    require(['isomorphic-fetch'], function() {
      done();
    });
  } else {
    setTimeout(done, 0);
  }
}
