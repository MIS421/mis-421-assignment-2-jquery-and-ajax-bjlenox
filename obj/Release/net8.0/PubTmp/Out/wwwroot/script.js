var len;
var results = '';

function apiSearch() {
    document.getElementById("searchResults").style = "visibility: visible;";
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
        $('#searchResults').dialog({
            title: 'Search results:',
            height: 500,
            width: 1000
            

        });
    })
    .fail(function () {
      alert("error");
    });
}

function whatTime() {
    console.log("time called");
    document.getElementById("time").style = "visibility: visible;";
    var now = new Date();
    var hours = now.getHours();
    if (hours > 12) {
        hours = hours - 12;
    }
    var mins = now.getMinutes();
    if (mins < 10) {
        var time = hours + ":0" + mins;
    }
    else {
        var time = hours + ":" + mins;
    }
    var time = hours + ":" + mins;
    document.getElementById('time').innerHTML = time;
    $('#time').html(time);
    $('#time').dialog({
        title: 'Current time',
        
    });
}
var count = 0;
function changeImg() {
    console.log("img changing");
    if (count == 0) {

        console.log("new");
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        count = 1;
    }
    else {
        console.log("old");
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1463852247062-1bbca38f7805?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        count = 0;
    }
}