var Alarm = require('./../js/Alarm.js').alarmModule;

$(document).ready(function() {

  function showTime() {
    $('#time').text(moment().format("h:mm:ss a"));
  }
  setInterval(showTime,1000);

  $("#input").submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm').val();
    var newAlarm = new Alarm(alarm);
    $('#alarmTime').text(moment(alarm,"H:mm").format("h:m:ss a"));
    // $('#alarmTime').text(alarm);
    function goOff() {
      if (newAlarm.checkAlarm()) {
        alert("Wake the Frak up!");
      }
    }
    setInterval(goOff,1000);
  });

});
