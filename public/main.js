console.log("May the odds be ever in your favor");

var $ready = $('#ready');

function isBase64(str) {
    try {
        return btoa(atob(str)) === str;
    } catch (err) {
        return false;
    }
}

$ready.on('click', function(evt) {
  $.get('/challenges', function(data) {
    var html = '<ol>';
    for (var i = 0; i < data.length; i++){
      if (isBase64(data[i].body) === true){
        var decoded = window.atob(data[i].body)
        html += '<li>' + decoded + '</li>';
      } else {
        html += '<li>' + data[i].body + '</li>';
      }
    }
  $('#challenges').append(html + '</ol>');
  var $next = $('<button id="next">Next</button>');
  var $moar = $('<div id="moar">')
  $moar.append($next);
  $('.wrapper').append($moar);
  $next.on('click', function(evt) {
    $.get('/challenges?next=true', function(data) {
      var html = '<ol>';
      for (var i = 0; i < data.length; i++){
        if (isBase64(data[i].body) === true){
          var decoded = window.atob(data[i].body)
          html += '<li>' + decoded + '</li>';
        } else {
          html += '<li>' + data[i].body + '</li>';
        }
      };
      $moar.append(html);
    });
  });
  });
});


$.ajax({
            url: 'https://mighty-caverns-93139.herokuapp.com/help',
            type: 'GET',
            dataType: 'json',
            headers: {
                'x-secret': 'shh'
            },
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
               console.log(result);
            },
            error: function (error) {
                console.log(error);
            }
        });




$.ajax({

  method: 'POST',

  url: 'https://mighty-caverns-93139.herokuapp.com/solution',

  dataType: 'json',

  data: JSON.stringify({
    'answer': 'CORS'
  }),

  headers: {
    'x-secret': 'shh'
  },

  contentType: 'application/json; charset=utf-8',

  success: function(data) {
    console.log(data);
  },

  error: function(error) {
    console.log(error);
  }
});
