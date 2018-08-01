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



/*function addMarker(object){
  var marker = L.marker([object.locationLong,object.locationLat]).addTo(mymap);
  markers.push(marker);
*/
/*  var stars = '';
  for(var i=1; i<=5;i++){
    if(i<=location.quality){
      stars +='<span class="fa fa-star checked"></span>'
    }
    else{
      stars +='<span class="fa fa-star unchecked"></span>'
    }
  }*/

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
}*/


//  }



axios.get('https://api.eduship.de/event')
.then(function (response) {
  console.log(response);
  for (index in response.data){
    var item = response.data[index];
    var description = item.name + '<br>' + item.startDate + '-' + item.endDate + '<br>' + '<a href="https://google.com">weitere Infos ...</a>';
    addMarker(item.locationLong, item.locationLat, description);
  }

})
 
