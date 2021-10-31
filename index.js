const hourElem = document.querySelector('.hour')
const minutesElem = document.querySelector('.minutes')
const secondsElem = document.querySelector('.seconds')
const getTimeElem = document.querySelector('.time')
const dayElem = document.querySelector('.day')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]


function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function setTime() {

    let time = new Date()
    let hour = time.getHours()
    let twelveHour = hour % 12
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let date = time.getDate()
    let ampm = hour >= 12 ? "PM" : "AM"


    let month = time.getMonth()
    month = months[month]


    let day = time.getDay()
    day = days[day]


    hourElem.style.transform = ` translate(-50%, -100%) rotate(${scale(twelveHour, 0, 11, 0, 360)}deg)`;

    minutesElem.style.transform = ` translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;

    secondsElem.style.transform = ` translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    dayElem.innerHTML = `${day} , ${month}  ${date}`


    getTimeElem.innerHTML = `${twelveHour}  : ${minutes < 9 ? `0${minutes}` : minutes} ${ampm}`




}

// setTime()
setInterval(setTime, 1000)
