document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelectorAll('#map').length > 0) {
        if (document.querySelector('html').lang)
            lang = document.querySelector('html').lang;
        else
            lang = 'dut';

        var js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyAbk6ZjlfyDfUZVfwK1fUWS8C3bLq933n8&language=' + lang;
        document.getElementsByTagName('head')[0].appendChild(js_file);
    }
});

var myMap;

function initMap() {
    myMap = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.0543, lng: 3.7174 },
        zoom: 14
    });

    var marker = new google.maps.Marker({
        position: { lat: 51.0543, lng: 3.7174 },
        map: myMap,
        title: "Gent"
    });

    
}