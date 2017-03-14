function Alarm(alarmTime) {
  this.alarmTime = alarmTime;
}

Alarm.prototype.checkAlarm = function() {
  var now = moment().format("h:m:ss a");
  var alarm = moment(this.alarmTime,"H:mm").format("h:m:ss a");
  if (now == alarm)
  {
    return true;
  }
};

exports.alarmModule = Alarm;
