//by Victoria Belandria Spring 2026
//"Time is an immigrant"
//read documentation: https://www.notion.so/Traveling-Clock-Project-2-30cadab656c18015b80fc05d3a69e4e2?source=copy_link
//References at the end of the code

window.onload = () => {
  init();

  var coord1 = 7.8179;
  var coord2 = -72.4508;

  let oneSpan = document.getElementById("clock");
  //set Interval()
  //1 param: function/action to be done
  //2 param: how much time in ms
  setInterval(() => {
    let date = new Date(); //this is what makes it moves upwards, ALWAYS include it
    oneSpan.innerHTML = date.toLocaleTimeString(); //this is where I want my new time to be display
  }, 1000); //read about empty functions in last class' notes

  var map = L.map("map");
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  var marker = L.marker([coord1, coord2]) //code for bindTooltip: By Mark in https://stackoverflow.com/questions/34775308/leaflet-how-to-add-a-text-label-to-a-custom-marker-icon#:~:text=1411%205-,Comments,5976%2014
    .bindTooltip("El paso del tiempo", {
      permanent: true,
      direction: "right",
    })
    .addTo(map);

  setInterval(() => {
    let date = new Date();
    var mapcoord = mapRange(date.getSeconds(), 0, 59, coord1, coord1 - 1);
    var mapcoord2 = mapRange(date.getSeconds(), 0, 59, coord2, coord2 - 1);
    //adding map
    map.setView([mapcoord, mapcoord2], 10);
    marker.setLatLng([mapcoord, mapcoord2]);
    console.log(mapcoord);
    //changing time numbers to coordinates
    document.getElementById("clock").innerHTML =
      mapcoord + "°N" + "  " + mapcoord2 + "°E";
  }, 1000);
};

function init() {}

//code for mapping: By llmari Karonen https://stackoverflow.com/questions/48802987/is-there-a-map-function-in-vanilla-javascript-like-p5-js#:~:text=Sorted%20by:,link%20CC%20BY%2DSA%203.0
// linearly maps value from the range (a..b) to (c..d)
function mapRange(value, a, b, c, d) {
  // first map value from (a..b) to (0..1)
  value = (value - a) / (b - a);
  // then map it from (0..1) to (c..d) and return it
  return c + value * (d - c);
}

//references:
// 1: https://stackoverflow.com/questions/48802987/is-there-a-map-function-in-vanilla-javascript-like-p5-js#:~:text=Sorted%20by:,link%20CC%20BY%2DSA%203.0
// 2. https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
// 3. https://leafletjs.com/reference.html#latlng
// 4. https://leafletjs.com/index.html#marker-setlatlng
// 5. https://leafletjs.com/reference.html#marker-setlatlng
// 6. https://leafletjs.com/reference.html#latlng
// 7. https://stackoverflow.com/questions/34775308/leaflet-how-to-add-a-text-label-to-a-custom-marker-icon#:~:text=1411%205-,Comments,5976%2014

