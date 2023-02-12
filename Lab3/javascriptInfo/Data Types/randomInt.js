function random(min, max) {
    return Math.round((min - 0.5 + Math.random() * (max - min + 1)));
}

console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );