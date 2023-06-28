function echo<T>(arg: T) {
  return arg;
}

function printName<T extends { salary: number }>(obj: T) {
  console.log(obj.salary);
}

class Entity<T> {
  constructor(public ID: T) {}
}

interface User {
  userId: number;
  usrename: string;
}

// keyof User will return an interable object that ccontains every key

printName({ salary: 2 });
