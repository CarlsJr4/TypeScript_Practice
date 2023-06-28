"use strict";
function echo(arg) {
    return arg;
}
function printName(obj) {
    console.log(obj.name);
}
class Entity {
    constructor(ID) {
        this.ID = ID;
    }
}
printName({ name: 'Carl' });
//# sourceMappingURL=index.js.map