<!--./index.js-->

fetch('https://raw.githubusercontent.com/thebcritics/thebcriticswebsite/main/Data/episodes.json')
  .then((response) => response.json())
  .then((json) => JSON.parse(json))
  .then((myObj) => {
    document.getElementById("latestEmbed").src = "https://open.spotify.com/embed/episode/" + myObj.items[0].id + "?theme=1";
});

/*Only needed for the controls*/
var phone = document.getElementById("phone_1"),
  iframe = document.getElementById("frame_1");

