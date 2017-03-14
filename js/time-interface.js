var Alarm = require('./../js/Alarm.js').alarmModule;

$(document).ready(function() {
  // create object with alarm time
  // set interval(draw current time, check if equal to alarm, trigger if equal)
  setInterval($('#time').text(moment()),1000);

});
