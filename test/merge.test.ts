import { expect } from 'chai';
import { merge } from '../src/merge';

describe('merge function', () => {
    it('should merge three sorted collections', () => {
        const collection1 = [1, 3, 5, 7, 9];
        const collection2 = [2, 4, 6, 8, 10];
        const collection3 = [10, 8, 6, 4, 2];
        const merged = merge(collection1, collection2, collection3);
        expect(merged).to.eql([10, 10, 9, 8, 8, 7, 6, 6, 5, 4, 4, 3, 2, 2, 1]);
    });
});
