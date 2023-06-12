import { booleanToString } from '../util';

describe('utils index', () => {
  describe('booleanToString', () => {
    it('converts a boolean true to its string value', () => {
      const iAmTrue = true;
      expect(booleanToString(iAmTrue)).toEqual('true');
      expect(typeof booleanToString(iAmTrue) === 'string').toBeTruthy();
      expect(typeof booleanToString(iAmTrue) !== 'boolean').toBeTruthy();
    });

    it('converts a boolean false to its string value', () => {
      const iAmFalse = false;
      expect(booleanToString(iAmFalse)).toEqual('false');
      expect(typeof booleanToString(iAmFalse) === 'string').toBeTruthy();
      expect(typeof booleanToString(iAmFalse) !== 'boolean').toBeTruthy();
    });
  });
});
