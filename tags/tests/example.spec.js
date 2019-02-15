/* eslint-env mocha,browser,jquery */
/* global sinon expect */

import riot from 'riot';
import '../tags/example.tag';

const $ = jQuery;

window.ReduxSolr = ReduxSolr;

// Specific to Riot tags...
const buildTag = (opts) => {
  const tag = document.createElement('example');
  tag.id = 'a-example';
  document.body.appendChild(tag);
  riot.mount('#a-example', 'example', opts);
  return document.querySelector('example')._tag;
};

describe('example', () => {
	// Also specific to Riot (beforeEach()/afterEach() however, are not Riot specific)...
	let tag;	

	// Depending on environemnt,
	// could be useful to write tests 
	// for set and teardown instead of using
	// beforeEach() and afterEach() 
	beforeEach(() => {
		tag = buildTag({});
	});
	afterEach(() => {
		tag.unmount();
	});

	it('should mount the tag', () => {
		expect(tag.isMounted).to.equal(true);
	});

	// Can use nested describe() to section off portions of the test...
	describe('#addTwo(num)', () => {
		it('expects #addTwo() to exist', () => {
			expect(tag.addTwo).to.not.be.undefined;
		});

		it('expects to add 2 to the given integer and return a result', () => {
			const expected = 4;
			const actual = tag.addTwo(2);

			expect(actual).to.be.equal(expected);
		});
	});

	describe('#subtractTwo(num) to subtract 2 from the given integer', () => {
		it('expects #subtractTwo() to exist', () => {
			expect(tag.subtractTwo).to.not.be.undefined;
		});

		it('expects to subtract 2 from the given integer and return a result', () => {
			const expected = 2;
			const actual = tag.subtractTwo(4);

			expect(actual).to.be.equal(expected);
		});
	});

	describe('#timesTwo(num) to multiply given integer by 2', () => {

		it('expects to multiply given number by 2 and return a result', () => {

		});
	});

	describe('#divideTwo(num) to divide given integer by 2', () => {

		it('expects to divide given number by 2 and return a result', () => {

		});
	});

	describe('#removeLast(arr)', () => {
		it('expects #removeLast() to exist', () => {
			expect(tag.removeLast).to.not.be.undefined;
		});

		it('expects to remove last item from array and return result', () => {
			const expected = [1, 2, 3, 4];
			const actual = tag.removeLast([1, 2, 3, 4, 5]);

			expect(actual).to.be.eql(expected);
		});
	});

	describe('#mergeArrays(arr1, arr2)', () => {

		it('expects to merge given arrays and return result', () => {

		});
	});
});