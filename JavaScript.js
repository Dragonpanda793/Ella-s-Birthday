// Function to calculate time since birth
function timeSinceBirth(birthdate) {
    var now = new Date();
    var birth = new Date(birthdate);
    var difference = now - birth;

    var seconds = Math.floor((difference / 1000) % 60);
    var minutes = Math.floor((difference / (1000 * 60)) % 60);
    var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

// Function to update clock display
function updateClock(birthdate) {
    var time = timeSinceBirth(birthdate);
    var clockElement = document.getElementById('clock');
    clockElement.textContent = time.days + ' days, ' + time.hours + ' hours, ' + time.minutes + ' minutes, ' + time.seconds + ' seconds';
}

// Set birthdate here (format: 'YYYY-MM-DD')
var birthdate = '2010-03-18';

// Update clock every second
setInterval(function () {
    updateClock(birthdate);
}, 1000);

// Initial update
updateClock(birthdate);