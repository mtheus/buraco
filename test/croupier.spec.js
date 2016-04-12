import Person from '../src/croupier';

describe('Greeter', () => {

  it('should say Hello to the World', () => {
  	const person = new Person('Matheus');
    expect(person.sayHello()).toEqual('Hello from ES6, Matheus');
  });

});

