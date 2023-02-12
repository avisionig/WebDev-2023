let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(i => ({fullName: i.name + " " + i.surname, id : i.id}))

console.log( usersMapped[0].id );
console.log( usersMapped[0].fullName );