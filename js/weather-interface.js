var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#locationButton').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.wind.speed + "%");

      var time = moment(response.sys.sunset, "X").format("h:mm:ss a");
      $('.showWeather').append("The sun will set in " + city + " at " + time);
      console.log(time);
    })
    .fail(function(error) {
       $('.showWeather').text(error.responseJSON.message);
     });
  });
});
