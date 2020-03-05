import { hello } from '../src/index';

test('say hello', () => {
  expect(hello()).toBe('hello world');
});
