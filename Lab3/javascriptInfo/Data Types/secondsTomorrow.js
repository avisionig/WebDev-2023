function getSecondsToTomorrow() {
    let now = new Date();
    return 86400 - (now.getHours() * 60 + now.getMinutes()) * 60 +now.getSeconds();
}
console.log(getSecondsToTomorrow());