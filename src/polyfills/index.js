import promiseReady from './Promise';
import fetchReady from './fetch';

export default function(done) {
  // Yo dawg, I heard you like JavaScript, so I put callbacks in
  // your callbacks so you can call them back while you callback
  promiseReady(() => {
    fetchReady(() => {
      done();
    });
  });
}
