var singapore = {lat: 1.342, lng: 103.825};
var map;
var searchBox;
var searchMarkers = [];
var mosqueMarkers = [];
var musollahMarkers = [];
var markerWindowToggle = false;
var nearestMosque = [];

function initMap() {
    // initialise map
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: singapore}
    );
    // Create the searchBox and link it to the input.
    let input = document.getElementById('userInput');
    searchBox = new google.maps.places.SearchBox(input);
    // run next functions
    loadMosqueMarkers();
    loadSearchBox();
};

function loadSearchBox() {
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    // Listen for the event fired when the user selects a prediction and retrieve more details for that place.
    searchBox.addListener('places_changed', displaySearchResult);
};

function displaySearchResult() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
        return;
    }

    // Clear out the old markers.
    searchMarkers.forEach(function(marker) {
        marker.setMap(null);
    });
    searchMarkers = [];
    nearestMosque = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
        // console.log(place);
        if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
        }
        var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };
        // Create a marker for each place.
        let searchMarker = new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location,
        });
        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
        findNearestMosque(place.name, place.geometry.location);
        let contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h4 id="firstHeading" class="firstHeading">'+place.name+'</h4>'+
        '<div id="bodyContent">'+
        '<p>'+place.formatted_address+'</p>'+
        '<p>Nearest mosque: <a href="/spaces/'+nearestMosque.id+'">'+nearestMosque.title+'</a>, '+nearestMosque.distance+'km</p>'+
        '</div>'+
        '</div>';
        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            // maxWidth: 200
        });
        searchMarker.addListener('click', function() {
            infowindow.open(map, searchMarker);
        });
        searchMarkers.push(searchMarker);
    });
    map.fitBounds(bounds);
};

function loadMosqueMarkers() {
    // receive list of mosques and parse
    // console.log(jList);
    let pList = JSON.parse(jList);
    // console.log(pList);
    let setMarker = pList.map(loc=> {
        // console.log(loc.name);
        let locLatlng = new google.maps.LatLng(loc.latitude, loc.longitude);
        // infowindow contents
        let contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h4 id="firstHeading" class="firstHeading">'+loc.name+' '+loc.type+'</h4>'+
        '<div id="bodyContent">'+
        '<p>'+loc.address+'</p>'+
        '<p><a href="/spaces/'+loc.id+'">View '+loc.type+' details</a></p>'+
        '<p>Get directions</p>'+
        '</div>'+
        '</div>';
        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            // maxWidth: 200
        });
        // set the marker onto the map
        let spaceMarker = new google.maps.Marker({
            position: locLatlng,
            map: map,
            title: loc.name,
            lat: loc.latitude,
            lng: loc.longitude,
            spaceId: loc.id
        });
        // console.log(spaceMarker.spaceId);
        // console.log(spaceMarker.title +': '+ spaceMarker);
        if (loc.type === 'mosque') {
            mosqueMarkers.push(spaceMarker);
        } else {
            musollahMarkers.push(spaceMarker);
        }
        // onclick open infowindow
        spaceMarker.addListener('click', function() {
            markerWindowToggle = !markerWindowToggle;
            toggleMarkerWindow(infowindow, spaceMarker);
        });
    })
};

// toggles mosqueMarker open and close on click
function toggleMarkerWindow(infowindow, spaceMarker) {
    if (markerWindowToggle) {
        infowindow.open(map, spaceMarker);
    } else {
        infowindow.close(map, spaceMarker);
    }
};

// finds nearest mosqueMarker
function findNearestMosque(searchName, searchLocation){
    nearestMosque = {
        'title': mosqueMarkers[0].title,
        'position': mosqueMarkers[0].position,
        'distance': mToKm(google.maps.geometry.spherical.computeDistanceBetween(searchLocation, mosqueMarkers[0].position)),
        'id': mosqueMarkers[0].spaceId
    }
    for (let i = 0; i < mosqueMarkers.length; i++) {
        let mosquePosition = mosqueMarkers[i].position;
        let distance = google.maps.geometry.spherical.computeDistanceBetween(searchLocation, mosquePosition);
        // console.log('distance between '+searchName+' and '+mosqueMarkers[i].title+': '+distance+' meters');
        if (distance < nearestMosque.distance) {
            nearestMosque = {
                'title': mosqueMarkers[i].title,
                'position': mosqueMarkers[i].position,
                'distance': mToKm(distance),
                'id': mosqueMarkers[i].spaceId
            }
        };
    };
    console.log(nearestMosque.title +', '+ nearestMosque.distance+', '+ nearestMosque.id);
};

// converts meter to kilometer, rounded to 2 decimal places
function mToKm(valNum) {
    return (valNum/1000).toFixed(2);
}