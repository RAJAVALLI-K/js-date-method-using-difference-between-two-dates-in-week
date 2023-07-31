// Difference between two dates in weeks

let date1 = new Date(2023, 8, 1);
let date2 = new Date(2023, 10, 1);

function diffWeek(date1, date2) {
    var diff = (date2.getTime() - date1.getTime()) / 1000;
    diff = diff / (60 * 60 * 24 * 7);
    return Math.abs(Math.round(diff));
}
console.log(diffWeek(date1, date2),'Week');