var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "3d2255f6fc104c30a3c35a2f093245ac");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function whatTime() {
    console.log("time called");
    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var time = hours + ":" + minutes;
    document.getElementById('time').innerHTML = time;
    $('#time').dialog({
        title: 'Current time'
    });
}
function changeImg() {
    console.log("img changing");
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
}