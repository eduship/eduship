var mymap = L.map('mapid').setView([51.165, 10.451], 5.5);
var marker1 = L.marker([50.937, 6.960]).addTo(mymap);
var marker2 = L.marker([48.775, 9.1829]).addTo(mymap);
var marker3 = L.marker([50.104, 8.676]).addTo(mymap);
var marker4 = L.marker([48.135, 11.581]).addTo(mymap);
var marker5 = L.marker([52.520, 13.404]).addTo(mymap);
marker1.bindPopup("<b>Code + Design</b><br>22.05 - 25.05.2018").openPopup();
marker2.bindPopup("<b>Code + Design</b><br>06.08 - 11.08").openPopup();
marker3.bindPopup("<b>Jugend Hackt</b><br>15.06 - 17.06.2018").openPopup();
marker4.bindPopup("<b>Think Big Camp: Making & Coding</b><br>25.05 – 27.05.2018").openPopup();
marker5.bindPopup("<b>Think Big Camp: Digital Storydesign</b><br>08.06 - 10. 06.2018").openPopup();


L.tileLayer('https://api.mapbox.com/styles/v1/elisabethschiele/cjgi2unu6005k2rs2pksr3m7i/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamdpMnFpcXowaWJwMnFwams4aWk5YXl3In0.IuvGOgBuRE6_BMIkhE7Okg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamdpMnFpcXowaWJwMnFwams4aWk5YXl3In0.IuvGOgBuRE6_BMIkhE7Okg'
}).addTo(mymap);

/*var markers=[];

function addMarker(location){
  var marker = L.marker([location.long,location.lat]).addTo(mymap);
  markers.push(marker);
}*/
