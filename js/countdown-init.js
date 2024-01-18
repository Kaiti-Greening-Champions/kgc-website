// countdown-init.js
$(document).ready(function() {
    $('#counter').countdown('February 1, 2024', function(event) {
      $('#days').text(event.days);
      $('#hours').text(('0' + event.hours).slice(-2));
      $('#minutes').text(('0' + event.minutes).slice(-2));
      $('#seconds').text(('0' + event.seconds).slice(-2));
    });
  });
  