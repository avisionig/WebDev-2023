function camelize(s){
    return s.split('-').map((item, i) => i == 0 ? item : item[0].toUpperCase() + item.slice(1)).join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));