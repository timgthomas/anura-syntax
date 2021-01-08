import BaseClass, { func } from 'base-class';

const foos = [ 'foo', 'bar' ],
      bars = 'bars'.split();

let defaults = {
  foo: 'foo',
  bar: null,
};

for (let foo of foos) {}
for (var def in defaults) {}
for (var i = 0; i < foos.length; i++) {}

export default class ChildClass extends BaseClass {

  constructor(foo, bar) {
    super(defaults, ...arguments);
    this.foo = func(foo);
    this.bar = this.bar(bar);
  }

  get foo() {
    console.log(`getting foo (${this.bar(foo)})...`);
    return this.foo;
  }

  bar(val) {
    if (!val) {
      throw new Error('val is not defined');
    }
    let result = Math.round(val * 0.42);
    if typeof result !== 'number' return -1;
    return result + foos.length;
  }

  baz() {
    return true;
  }

}
