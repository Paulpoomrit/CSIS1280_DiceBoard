
// execute the function, update every 1 sec
setInterval("setDate()",1000);
setInterval("setTime()",1000);

function setDate() {
    // set current date
    let currentDate = new Date().toLocaleDateString("en-US");
    console.log(currentDate.toString());

    document.getElementById("day").innerHTML = currentDate;
}

function formatTime(number) {
    return number < 10 ? '0' + number : number;
}

function setTime() {
    let now = new Date();
    let hours = formatTime(now.getHours());
    let minutes = formatTime(now.getMinutes());
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
}