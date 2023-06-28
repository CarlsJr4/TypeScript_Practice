"use strict";
class Logger {
    constructor(file) {
        this.file = file;
    }
    log(message) {
        console.log(message);
    }
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Employee extends Person {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
//# sourceMappingURL=index.js.map