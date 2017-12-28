import { expect } from 'chai';
import exampleFunction from '../src/example';

describe('example function', () => {
  it('example function works', () => {
    const result = exampleFunction(10);
    expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
