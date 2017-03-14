var Alarm = require('./../js/Alarm.js').alarmModule;

$(document).ready(function() {

  function showTime() {
    $('#time').text(moment().format("h:mm:ss a"));
  }
  setInterval(showTime,1000);

  $("#inputAlarm").submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm').val();
    var newAlarm = new Alarm(alarm);
    $('#alarmTime').text(newAlarm.alarmTime.format("h:mm:ss a"));
    // $('#alarmTime').text(alarm);
    function goOff() {
      if (newAlarm.checkAlarm()) {
        alert("Wake the Frak up!");
      }
    }
    setInterval(goOff,1000);

    console.log(newAlarm.alarmTime.format("h:mm:ss a"));
    console.log(typeof newAlarm.alarmTime.format("h:mm:ss a"));

    function countDown() {
      var time = newAlarm.alarmTime.fromNow();
      $('#alarmCount').text(time);
    }
    setInterval(countDown,1000);
  });


});
