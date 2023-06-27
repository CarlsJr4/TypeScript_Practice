type User = {
  name: string;
  age: number;
  occupation?: string;
};

type Bird = {
  fly: true;
};

type Fish = {
  swim: true;
};

let pet: Bird | Fish;

type Day = 'Monday' | 'Tuesday' | 'Wednesday';

// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
// console.log(user?.address?.street);

// let x = foo !== null && foo !== undefined ? foo : bar();
// let x = foo ?? bar();

// let value: unknown = 'a'
// console.log(value.toUpperCase());
// The problem is that the unknown type hasn't been narrowed yet
