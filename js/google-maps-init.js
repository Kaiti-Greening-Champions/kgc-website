var geocoder;
var address = "2500 CityWest Blvd. - Suite 300 Houston, Texas - 77042 USA"; // Your address
var latitude;
var longitude;
var color = "#9bc8ce"; // Your tint color

function initGoogleMap() {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            latitude = results[0].geometry.location.lat();
            longitude = results[0].geometry.location.lng();
            createMap();
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function createMap() {
    var styles = [/* ... your styles ... */];
    var options = {
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 13,
        scrollwheel: false,
        // ... other options ...
    };
    var div = document.getElementById('googleMap');
    var map = new google.maps.Map(div, options);
    // ... rest of your map creation code ...
}

google.maps.event.addDomListener(window, 'load', initGoogleMap);
