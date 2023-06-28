// OOP Exercises
class Logger {
  constructor(public file: string) {}

  log(message: string) {
    console.log(message);
  }
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Employee extends Person {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

// Private members are only accessible within the parent class. Cannot be inherited.
// Protected members can be inherited

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface Employee2 {
  name: string;
  salary: number;
  address: Address;
}
