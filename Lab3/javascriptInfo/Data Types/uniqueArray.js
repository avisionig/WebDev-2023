function unique(arr) {
    let set = [];
    for (let i of arr) {
        if (!set.includes(i)) {
            set.push(i);
        }
    }
    return set;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) );