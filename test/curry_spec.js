const mocha = require('mocha');
const expect = require('chai').expect;
const curry = require('../index.js');

describe("curry", () => {
  let addThree;
  beforeEach(() => {
    addThree = curry((a, b, c) => a + b + c);
  });

  afterEach(() => {
    addThree = null;
  });
  describe("when required", () => {
    it("should be avalilable", () => {
      expect(curry).not.to.be.undefined;
    });

    it("should be higher order function", () => {
      expect(curry).to.be.function;
    });
  });

  describe("useage", () => {
    describe("when not passing function as first argument", () => {
      it("should throw error", () => {
        expect(function() {
          curry(1)
        }).to.throw('Expected function as first argument but got number');
      });
    });

    describe("after curry is applied", () => {
      describe("when insufficient arguments is passed", () => {
        it("should return curried function", () => {
          expect(addThree(2)(3)).to.be.function;
        });
      });
      describe("when sufficient arguments is passed", () => {
        it("should return the result of original function", () => {
          const nth = curry((n, list) => list[n]);
          const first = nth(0);
          expect(first([1,2,3])).to.eql(1);
          expect(addThree(1,2,3)).to.eql(6);
        });
      });
    });
  });
});
