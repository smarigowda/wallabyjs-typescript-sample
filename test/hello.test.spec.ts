import Hello from "../src/hello";
import * as chai from "chai";

const { assert } = chai;

const hello = new Hello();

describe("hello - spec", function () {
  it("hello - test", function () {
    const result = hello.sayHello();
    assert.equal(result, "Hello World!");
  });
});