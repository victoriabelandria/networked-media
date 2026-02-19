// alert('Hello this is Javascript speaking!')
// console.log('This is a message in the console')

window.onload = () => {
  init();

  var coord1 = 40.7128;
  var coord2 = -74.006;

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
    var mapcoord = mapRange(date.getSeconds(), 0, 59, coord1, coord1 + 1);
    var mapcoord2 = mapRange(date.getSeconds(), 0, 59, coord2, coord2 - 1);
    //adding map
    map.setView([mapcoord, mapcoord2], 10);
    marker.setLatLng([mapcoord, mapcoord2]);
    console.log(mapcoord);
    document.getElementById("clock").innerHTML =
      mapcoord + "°N" + "  " + mapcoord2 + "°E";
  }, 1000);
};

function init() {}

// linearly maps value from the range (a..b) to (c..d)
function mapRange(value, a, b, c, d) {
  // first map value from (a..b) to (0..1)
  value = (value - a) / (b - a);
  // then map it from (0..1) to (c..d) and return it
  return c + value * (d - c);
}
