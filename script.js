// script.js

// Function to display the current date and time in UTC format
function displayCurrentDateTime() {
    const now = new Date();
    const utcDateTime = now.toISOString().replace('T', ' ').substring(0, 19);
    document.getElementById('date-time').innerText = utcDateTime;
}

// Call the function to display date and time
displayCurrentDateTime();

// Optional: Update the date and time every second
setInterval(displayCurrentDateTime, 1000);