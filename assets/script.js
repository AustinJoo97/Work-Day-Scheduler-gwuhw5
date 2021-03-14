let currentDay = $('#currentDay');
let timeStamps = $('#timeStamps');
let dailyEvents = $('dailyEvents');
let workDayHours = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']

function initializer(){
    currentDay.text(moment().format('dddd MMM Do, YYYY'));

    for(let i = 0; i < workDayHours.length; i++){
        if(i === workDayHours.length-1){
            let nextTimeStamp = `<li id="hour${workDayHours[i]}" style="border-bottom: 2px solid cyan">${workDayHours[i]}</li>`;
            timeStamps.append(nextTimeStamp);
            break;
        }
        let nextTimeStamp = `<li id="hour${workDayHours[i]}">${workDayHours[i]}</li>`;
        $('#timeStamps').append(nextTimeStamp);
    }

}

initializer();