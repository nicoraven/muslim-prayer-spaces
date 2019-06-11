// minimap for viewSpaceDetails page
function initMap() {
    console.log("loading map");

    // get stored location of space
    var space = JSON.parse(jList);
    var loc = {
        lat: 0,
        lng: 0
    };
    loc.lat = space.latitude;
    loc.lng = space.longitude;
    console.log("loc", loc);

    // initialise map, centered at space
    var map = new google.maps.Map(
        document.getElementById('miniMap'), {
            zoom: 18,
            center: loc
        }
    );

    // set the marker, positioned at space
    var marker = new google.maps.Marker({
        position: loc,
        map: map
    });
};