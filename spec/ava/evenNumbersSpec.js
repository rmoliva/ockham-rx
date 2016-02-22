import test from 'ava';
import evenNumbers_ from './evenNumbers';

test('checks 3 even numbers', t => {
  t.plan(3);
  return evenNumbers_
    .map(n => {
      t.true(n % 2 === 0);
    });
});
