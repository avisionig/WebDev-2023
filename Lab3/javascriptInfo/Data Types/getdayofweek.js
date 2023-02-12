function getWeekDay(date) {
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[date.getDay()];
}
let date = new Date(2014, 0, 3); // 3 Jan 2014
console.log( getWeekDay(date) );