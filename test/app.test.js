import Settings from '../src/app';

test('change settings', () => {
  const testSettings = new Settings();
  testSettings.change('music', 'rock');
  expect(testSettings.userSettings.get('music')).toBe('rock');
});

test('wrong user value error', () => {
  const recieved = function () {
    const testSettings = new Settings();
    testSettings.change('music', 'country');
  }
  expect(recieved).toThrow('Wrong value');
});

test('show current settings', () => {
  const testSettings = new Settings();
  testSettings.change('music', 'rock');
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]);
  expect(testSettings.settings).toEqual(expected);
});
