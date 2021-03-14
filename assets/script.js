let timeEl = $('#currentDay');

setInterval(function(){
    timeEl.text(moment().format("dddd MMM Do, YYYY hh:mm:ss"))
}, 1000)