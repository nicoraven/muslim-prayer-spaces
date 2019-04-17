function initMap() {
    let singapore = {lat: 1.342, lng: 103.825};
    let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: singapore});

    // console.log(jList);

    let promise = new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…
        let pList = JSON.parse(jList);

        if (pList) {
            resolve(pList);
        }
        else {
            reject(Error("It broke"));
        }
    });

    promise.then(function(result) {
        // "Stuff worked!"
        let setMarker = result.map(loc=> {
            // console.log(loc.name);
            let myLatlng = new google.maps.LatLng(loc.latitude, loc.longitude);

            let contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading">'+loc.name+'</h4>'+
            '<div id="bodyContent">'+
            '<p>'+loc.address+'</p>'+
            '<p>View '+loc.type+' details</p>'+
            '<p>Get directions</p>'+
            '</div>'+
            '</div>';

            let infowindow = new google.maps.InfoWindow({
                content: contentString,
                // maxWidth: 200
            });

            let marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: loc.name
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        })

    }, function(err) {
        // Error: "It broke"
        console.log(err);
    });
};

// To add the marker to the map, call setMap();
// marker.setMap(map);