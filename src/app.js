export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy']
    ]);
    this.userSettings = new Map()
    this.allowed = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare']
    }
  }

  change(key, value) {
    if(this.allowed[key].includes(value)) {
      this.userSettings.set(key, value);
    } else {
      throw new Error('Wrong value')
    }
  }

  get settings() {
    const result = new Map;
    this.defaultSettings.forEach((value, key) => {
      if (this.userSettings.has(key)) {
        result.set(key, this.userSettings.get(key));
      } else {
        result.set(key, value);
      }
    }, this);
    return result;
  }
}