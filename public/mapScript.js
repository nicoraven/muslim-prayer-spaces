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

            let marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: loc.name
            });
        })

    }, function(err) {
        // Error: "It broke"
        console.log(err);
    });
};

// To add the marker to the map, call setMap();
// marker.setMap(map);