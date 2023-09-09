
const currentDay = document.getElementById("day")
const currentTime = document.getElementById("time")

const date = new Date()

currentTime.innerHTML = date.getUTCMilliseconds()

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

dayOfWeek(date.getDay().toLocaleString());