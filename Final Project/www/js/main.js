$( document ).ready(function() {
    
$('input').click(function () {
$.getJSON('http://horoscope-api.herokuapp.com/horoscope/today/'+this.id, function (data) {
      var dailyHoroscope = data.horoscope;
      var dateToday = data.date;
      var zodiac = data.sunsign;
        $("#zodiac").html(zodiac);
        $("#date").html(dateToday);
        $("#horoscope").html(dailyHoroscope);
    });
  });
  });
