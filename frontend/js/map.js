var mymap = L.map('mapid').setView([51.165, 10.451], 5.5);
var markers=[];

L.tileLayer('https://api.mapbox.com/styles/v1/elisabethschiele/cjgi2unu6005k2rs2pksr3m7i/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamdpMnFpcXowaWJwMnFwams4aWk5YXl3In0.IuvGOgBuRE6_BMIkhE7Okg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamdpMnFpcXowaWJwMnFwams4aWk5YXl3In0.IuvGOgBuRE6_BMIkhE7Okg'
}).addTo(mymap);

function addMarker(long, lat, description){
  var marker = L.marker([long,lat]).addTo(mymap)
  .bindPopup(description)
  markers.push(marker);
  }


axios.get('http://localhost:3000/event')
.then(function (response) {
  console.log(response);
  for (index in response.data){
    var item = response.data[index];
    var description = item.name + '<br>' + item.startDate + '-' + item.endDate + '<br>' + '<a href="https://google.com">weitere Infos ...</a>';
    addMarker(item.locationLong, item.locationLat, description);
  }
})
