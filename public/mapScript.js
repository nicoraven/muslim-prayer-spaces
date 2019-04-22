var singapore = {lat: 1.342, lng: 103.825};
var map;
var searchBox;
var searchMarkers = [];
var mosqueMarkers = [];
var nearestMosqueMarkers = [];
var mosqueMarkerToggle = false;
var nearestMosque = "";

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
    nearestMosqueMarkers = [];
    nearestMosque = "";

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
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
        searchMarkers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location,
        }));
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
        '<p>'+place.address+'</p>'+
        '<p>Nearest mosque:</p>'+
        '</div>'+
        '</div>';
        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            // maxWidth: 200
        });
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
        '<h4 id="firstHeading" class="firstHeading">'+loc.name+'</h4>'+
        '<div id="bodyContent">'+
        '<p>'+loc.address+'</p>'+
        '<p><a href="/spaces/'+loc.id+'">View '+loc.type+' details</p>'+
        '<p>Get directions</p>'+
        '</div>'+
        '</div>';
        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            // maxWidth: 200
        });
        // set the marker onto the map
        let mosqueMarker = new google.maps.Marker({
            position: locLatlng,
            map: map,
            title: loc.name,
            lat: loc.latitude,
            lng: loc.longitude
        });
        // console.log(mosqueMarker.title +': '+ mosqueMarker);
        mosqueMarkers.push(mosqueMarker);
        // onclick open infowindow
        mosqueMarker.addListener('click', function() {
            mosqueMarkerToggle = !mosqueMarkerToggle;
            toggleMosqueMarker(infowindow, mosqueMarker);
        });
    })
};

// toggles mosqueMarker open and close on click
function toggleMosqueMarker(infowindow, mosqueMarker) {
    if (mosqueMarkerToggle) {
        infowindow.open(map, mosqueMarker);
    } else {
        infowindow.close(map, mosqueMarker);
    }
};

// finds nearest mosqueMarker
function findNearestMosque(searchName, searchLocation){
    // calculate distance for each mosque
    // for(let mosque of mosqueMarkers){
    //     let mosquePosition = mosque.position;
    //     let distance = google.maps.geometry.spherical.computeDistanceBetween(searchLocation, mosquePosition);
    //     console.log('distance between '+searchName+' and '+mosque.title+': '+distance+' meters');
    // };
    for (let i = 0; i < mosqueMarkers.length; i++) {
        let mosquePosition = mosqueMarkers[i].position;
        let distance = google.maps.geometry.spherical.computeDistanceBetween(searchLocation, mosquePosition);
        console.log('distance between '+searchName+' and '+mosqueMarkers[i].title+': '+distance+' meters');
    };
};

/*
let mosquePosition = mosqueMarkers[0].position;
console.log('searchlocation: '+searchLocation);
console.log('mosque location: '+mosquePosition);
var distance = google.maps.geometry.spherical.computeDistanceBetween(searchLocation, mosquePosition);
console.log('distance between searchLocation and '+mosqueMarkers[0].title+': '+distance+' meters');
*/