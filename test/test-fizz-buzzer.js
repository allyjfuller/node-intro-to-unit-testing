// Import chai & declare expect variable
const expect = require('chai').expect;

// Import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// Unit tests for fizzBuzzer function
describe('fizzBuzzer', function()) {

// Tests the normal case for numeric inputs
	it('should return "fizz-buzz" for multiples of 15', function() {
		[15, 30, 45].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz-buzz');
		});
	});

	it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    	});
  	});

  it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    	});
  	});

  it('should return number if not mult of 3 or 5', function() {
    [1, 2, 4, 7].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    	});
  	});

// Tests edge case for non-numeric inputs
  it('should produce error if input isn\'t number', function() {
    // Range of bad inputs
    const badInputs = [true, false, 'dog', function() {}, [1, 2, 3]];
    // Prove an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
    	});
  	});
};