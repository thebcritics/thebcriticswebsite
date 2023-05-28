<!--./episodes.js-->
fetch('./data.json')
  .then((response) => response.json())
  .then((json) => JSON.parse(json))
  .then((data) => {
      const dataJson = data;
      for (var i = 0; i < data.items.length; i++) {
        var title = data.items[i].name;
        // var descFull = data.items[i].description;
        var desc = data.items[i].description.substring(0,200) + "...";
        // var searchReturn = title.toUpperCase() + descFull.toUpperCase();
        // var searchQuery = document.getElementById('myInput').toUpperCase();
        var imageurl = data.items[i].images[0].url;
        var audioprev = data.items[i].audio_preview_url;
        var key = data.items[i].id;
          var badge = document.createElement('div');
                badge.className = 'tile';
                badge.id = key
                badge.innerHTML =
                  '<img src="' + imageurl + '"/>' +
                  //'<img src="https://i.scdn.co/image/ab67656300005f1f7a26bdaa44ed8cad4cbac373"/>' +
                  '<div class="text">' +
                  '<h2>' + title + '</h2>' + 
//                   '<p class="animate-text">' + desc + '</p>' + 
                  '<div class="audioplayer"><audio controls>' + 
                  '<source src="' + audioprev + '" type="audio/mpeg"></audio></div>' + 
                  '</div>';
                document.getElementById('badge-list').appendChild(badge);
            } // for loop
      }); //fetch inner

function searchFunction() {
  var tileList = document.getElementsByClassName('tile');
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  
  for (i = 0; i < tileList.length; i++) {
    a = tileList[i].getElementsByTagName("h2")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tileList[i].style.display = "";
    } else {
      tileList[i].style.display = "none";
    }
  }
 }; //function wrapper

