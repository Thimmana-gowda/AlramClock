// updating the clock display function

function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById("time");
    timeElement.textContent = now.toLocaleTimeString();
    }

 
// setting an alarm function

function setAlarm() {
    
const hour = document.getElementById("hr").value;
const minute = document.getElementById("min").value;
const second = document.getElementById("sec").value;
const ampm = document.getElementById("ampm").value;
const alarmTime = `${hour}:${minute}:${second} ${ampm}`;
const alarmsList = document.getElementById("alarms");
const li = document.createElement("li");
//applying list-style
    li.style.listStyle = "none";          
    li.style.listStyleType = "number"; 
    li.style.marginLeft= "200px";
    alarmsList.style.marginRight ="160px"; //applying marginRight to alarmsList
    li.textContent = alarmTime;


// Delete button creation for the alarm

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "30px" //applying marginLeft to deletebutton
    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteButton);
    alarmsList.appendChild(li);


// Setting a timeout to trigger the alarm

    setTimeout(function () {

        alert(`Alarm RINGING Started: ${alarmTime}`);
        li.remove(); // Removing the alarm from the list 
    }, getAlarmTimeMillis(alarmTime));
}



// function to convert alarm time to milliseconds 

    function getAlarmTimeMillis(alarmTime) {

        const parts = alarmTime.split(" ");
        const timeParts = parts[0].split(":");
        const ampm = parts[1];

        let hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        const seconds = parseInt(timeParts[2]);

        if (ampm === "PM" && hours !== 12) {
            hours += 12;
        } else if (ampm === "AM" && hours === 12) {
            hours = 0;
        }

        const alarmDate = new Date();
        alarmDate.setHours(hours, minutes, seconds, 0);

        const now = new Date();
        const millisUntilAlarm = alarmDate - now;

        if (millisUntilAlarm <= 0) {
        // Alarm time in past then setting it for next day
            alarmDate.setDate(alarmDate.getDate() + 1);
        }
        return alarmDate - now;

    }



    // clock get updated every secound

    setInterval(updateClock, 1000);

