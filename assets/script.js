let currentDay = $('#currentDay');
let timeStamps = $('#timeStamps');
let dailyEvents = $('#dailyEvents');
let saveButtons = $('#saveButtons')
let workDayTimes = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']
let workDayHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

function initializer(){
    currentDay.text(moment().format('dddd MMM Do, YYYY'));

    for(let i = 0; i < workDayTimes.length; i++){
        if(i === workDayTimes.length-1){
            timeStamps.append(`<li class="time-block hour customTimeStamps" style="border-bottom: 2px solid cyan">${workDayTimes[i]}</li>`);

            dailyEvents.append('<textarea class="customScheduleInput" style="border-bottom: 2px solid red"></textarea>');

            saveButtons.append(`<button class="saveBtn customSaveBtn" style="border-bottom: 2px solid grey">Save</button>`)
            break;
        }
        timeStamps.append(`<li class="time-block hour customTimeStamps" id="hour${workDayTimes[i]}">${workDayTimes[i]}</li>`);

        dailyEvents.append('<textarea class="customScheduleInput"></textarea>');

        saveButtons.append(`<button class="saveBtn customSaveBtn">Save</button>`)
    }
}

initializer();