<!--./index.js-->

fetch('/Data/episodes.json')
  .then((response) => response.json())
  .then((json) => JSON.parse(json))
  .then((myObj) => {
    //console.log(myObj);
    //console.log(myObj.items[0].description);
    // document.getElementById("latestPod").innerHTML = "Ep. 0" + myObj.items[0].name.substring(0,2) + "-<br>"+myObj.items[0].name.substring(5);
    document.getElementById("latestEmbed").src = "https://open.spotify.com/embed/episode/" + myObj.items[0].id + "?theme=1";
  
});

/*Only needed for the controls*/
var phone = document.getElementById("phone_1"),
  iframe = document.getElementById("frame_1");

