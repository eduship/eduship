var mymap = L.map('mapid').setView([51.165, 10.451], 5.5);

var markers=[];


L.tileLayer('https://api.mapbox.com/styles/v1/elisabethschiele/cjgi2unu6005k2rs2pksr3m7i/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamdpMnFpcXowaWJwMnFwams4aWk5YXl3In0.IuvGOgBuRE6_BMIkhE7Okg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWxpc2FiZXRoc2NoaWVsZSIsImEiOiJjamdpMnFpcXowaWJwMnFwams4aWk5YXl3In0.IuvGOgBuRE6_BMIkhE7Okg'
}).addTo(mymap);


function addMarker(object){
  var marker = L.marker([object.locationLong,object.locationLat]).addTo(mymap)
  marker.bindPopup('<b>'+object.name+'</b><br>'+object.startDate+ '  -  '+object.endDate+'</br><br><a href="placeholder.html" class="btn-karte-popup" role="button">mehr info</a>').openPopup();
  markers.push(marker);

}


  /*var info = '';
  info +='<button type="button" class="btn-karte-popup" data-id="'+object.id+'" data-toggle="modal" </button><hr>';

  marker.on('click', function (e){
    document.getElementById('content').innerHTML = info;
    document.getElementById('contentTitle').innerHTML = location.name;
  })*/

/*  marker.bindPopup('<b>'+object.name+'</b><br><button type="button" class="btn-karte-popup" data-id="'+object.id+'"data-toggle="modal" data-target="#exampleModal">more info</button>').openPopup();


  var info = '';

      info +='<div><div><b> '+object.name+'</b></div><span> </span>'+object.startDate+'<span> - </span> <div>'+object.endDate+'</div></div>'
      info +='<button type="button" class="btn-karte-popup" data-id="'+object.id+'" data-toggle="modal" </button><hr>'
  }

  marker.on('click', function (e){
    marker.openPopup();
    document.getElementById('content').innerHTML = info;
    document.getElementById('contentTitle').innerHTML = location.name;
  })
}

function addContent(trinken){
  var neu = "neuer <b>fetter<\/b> Text";
   document.getElementById('content').innerHTML = neu;
}
}*/




axios.get('http:s//rapi.eduship.de/event')
.then(function (response) {
  console.log(response);
  for (index in response.data){
    var item = response.data[index];
    addMarker(item);
  }

})
