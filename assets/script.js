let currentDay = $('#currentDay');
let timeStamps = $('#timeStamps');
let dailyEvents = $('#dailyEvents');
let saveButtons = $('#saveButtons');
let workDayTimes = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']
let workDayHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; //Military hours

//This function will run when the page is rendered
    // It will first render all the timeStamps, dailyEvents textareas, and saveButtons to the viewport
    // AFTER THIS, IT WILL SEARCH THROUGH LOCALSTORAGE TO FIND ANY PREVIOUSLY SAVED EVENTS AND RENDER THEM TO THEIR APPROPRIATE TIMESLOTS (NEED TO IMPLEMENT)
function initializer(){
    currentDay.text(moment().format('dddd MMM Do, YYYY'));

    // This will render the timeStamps, dailyEvents boxes, and saveButtons to the DOM
    for(let i = 0; i < workDayTimes.length; i++){
        if(i === workDayTimes.length-1){
            timeStamps.append(`<li class="time-block hour customTimeStamps" style="border-bottom: 2px solid cyan">${workDayTimes[i]}</li>`);

            dailyEvents.append(`<textarea id="hour${workDayHours[i]}events" class="customScheduleInput hour${workDayHours[i]}" style="border-bottom: 2px solid red"></textarea>`);

            saveButtons.append(`<button id="saveHour${workDayHours[i]}events" class="saveBtn customSaveBtn hour${workDayHours[i]}" style="border-bottom: 2px solid grey">&#128190</button>`)
            break;
        }
        timeStamps.append(`<li class="time-block hour customTimeStamps" id="hour${workDayTimes[i]}">${workDayTimes[i]}</li>`);

        dailyEvents.append(`<textarea id="hour${workDayHours[i]}events" class="customScheduleInput hour${workDayHours[i]}"></textarea>`);

        saveButtons.append(`<button id="saveHour${workDayHours[i]}events" class="saveBtn customSaveBtn hour${workDayHours[i]}">&#128190</button>`)
    }

    // This will create an object at localstorage.dailyEvents if there doesn't exist one already
    if(!localStorage.getItem("dailyEvents")){
        localStorage.setItem("dailyEvents", JSON.stringify({
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour1: "",
            hour2: "",
            hour3: "",
            hour4: "",
            hour5: ""
        }));
    }

    // This will take all the values from localstorage and render it to the DOM in the appropriate blocks
}

// This function will, upon clicking a save button, save to localstorage the corresponding list of events entered in the textarea adjacent to the button
    // Ideally, it will add any new events to an array, and set the array as a value that corresponds to a key denoting the current timeslot
    // Afterwards, since it is saved, upon rendering the page, the intializer function will take all stored values in local storage and print them to the DOM
function saveCurrentTimeEvents(event){
    let currentHour = event.target.classList[2];
    let allEvents = event.target.parentElement.previousElementSibling.children;
    let currentEvents;
    let allNewEvents;

    for(let i = 0; i < allEvents.length; i++){
        if($(allEvents[i]).hasClass(currentHour)){
            currentEvents = $(allEvents[i]).val()
        }
    }
    
    allNewEvents = saveEvents(currentHour, currentEvents, JSON.parse(localStorage.getItem("dailyEvents")));
    localStorage.setItem("dailyEvents", JSON.stringify(allNewEvents));
}

// This function will take the localStorage object, find the key based on one enters as a parameter, and a string.
    // It will then add the string to the object's value at key then save it and return the object
function saveEvents(currentHourKey, val, obj){
    if(val){
        if(!obj[currentHourKey]){
            obj[currentHourKey] = val;
        } else {
            let temp = obj[currentHourKey] + ", " + val;
            obj[currentHourKey] = temp;
            console.log('saved!')
        }
    }
    console.log(obj)
    return obj;
}

// This functino will, upon clicking a clear button, reset the localStorage object to its default properties, rendering a new, black schedule
function clearEvents(){

}

// This set interval timer will run every 60 seconds (60000ms) to perform a check to see what the current time is.
    // With each passing hour, the classes of the html dailyEvents item will be changed to correspond to the current time and show the correct colored background noting this change
setInterval(function(){

}, 60000);


initializer();
saveButtons.on("click", saveCurrentTimeEvents);
