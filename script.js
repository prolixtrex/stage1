
const currentDay = document.getElementById("day")
const currentSeconds = document.getElementById("seconds")
const currentTime = document.getElementById("time")
const currentDate = document.getElementById("date")
const currentYear = document.getElementById("year")
const dayNum = document.getElementById("dayNum")
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



setInterval(() => {
    const date = new Date()

    currentTime.innerHTML = `${date.getHours()}:${date.getMinutes()}`
    dayNum.innerHTML = date.getDate()
    currentDate.innerHTML = months[date.getMonth()]
    currentYear.innerHTML = date.getFullYear()

    dayOfWeek(date.getDay().toLocaleString());
}, 1000);

setInterval(() => {
    const date = new Date()
    currentSeconds.innerHTML = date.getUTCMilliseconds();
}, 100);

const dayOfWeek = (prop) => {
    let result;
    switch (prop) {
        case "1":
            result = "Monday"
            break;
        case "2":
            result = "Tuesday"
            break;
        case "3":
            result = "Wednesday"
            break;
        case "4":
            result = "Thursday"
            break;
        case "5":
            result = "Friday"
            break;
        case "6":
            result = "Saturday"
            break;
        case "7":
            result = "Sunday"
            break;

        default:
            "Invalid Date"
            break;
    }

    currentDay.innerHTML = result
}