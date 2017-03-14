function Alarm(alarmTime) {
  this.alarmTime = moment(alarmTime,"H:mm");
}

Alarm.prototype.checkAlarm = function() {
  var now = moment().format("h:m:ss a");
  var alarm = this.alarmTime.format("h:m:ss a");
  if (now == alarm)
  {
    return true;
  }
};

exports.alarmModule = Alarm;
