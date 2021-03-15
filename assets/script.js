let currentDay = $('#currentDay');
let timeStamps = $('#timeStamps');
let dailyEvents = $('#dailyEvents');
let workDayHours = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']

function initializer(){
    currentDay.text(moment().format('dddd MMM Do, YYYY'));

    for(let i = 0; i < workDayHours.length; i++){
        if(i === workDayHours.length-1){
            timeStamps.append(`<li id="hour${workDayHours[i]}" style="border-bottom: 2px solid cyan">${workDayHours[i]}</li>`);
            dailyEvents.append('<li style="border-bottom: 2px solid red"><input id="scheduleInput" ></input></li>');
            break;
        }
        timeStamps.append(`<li id="hour${workDayHours[i]}">${workDayHours[i]}</li>`);
        dailyEvents.append('<li><input id="scheduleInput"></input></li>');
    }

    // for(let i = 0; i < workDayHours.length; i++){
    //     if(i === workDayHours.length-1){
    //         dailyEvents.append('<li style="border-bottom: 2px solid red"><input id="scheduleInput" ></input></li>');
    //         break;
    //     }
    //     dailyEvents.append('<li><input id="scheduleInput"></input></li>');
    // }
}

initializer();