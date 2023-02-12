function sumSalaries(salaries) {

    let sum = 0;
    for (let i of Object.values(salaries)) {
        sum += i;
    }

    return sum; // 650
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) );