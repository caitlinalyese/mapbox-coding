mapboxgl.accessToken = 'pk.eyJ1IjoiY2FpdGxpbmFseWVzZSIsImEiOiJjazl3Zno4YnIwOTE2M2tta285b3NhdmFlIn0.oJPIrdlGZdl9C5Zl71y0OA';
var map = new mapboxgl.Map({
container: 'map',
center: [ -89.78096008300781, 30.27582067991502 ],
style: 'mapbox://styles/mapbox/dark-v10',
zoom: 12
});

map.addControl(new mapboxgl.NavigationControl());
 
map.on('load', function() {
    map.addSource('points', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    // feature for Mapbox DC
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [-89.7621712, 30.2838493]
    },
    'properties': {
    'title': "Sugar Love Bakery and Snoballs",
    'icon': ''
    }
    },
    {
    // feature for Mapbox SF
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [-89.794547, 30.2484329 ]
    },
    'properties': {
    'title': "Jelly Donuts and Kolaches of Slidell",
    'icon': "star-11"
    }
    }
    ]
    }
    });
    map.addLayer({
    'id': 'points',
    'type': 'symbol',
    'source': 'points',
    'layout': {
    // get the icon name from the source's "icon" property
    // concatenate the name to get an icon from the style's sprite sheet
    'icon-image': ['concat', ['get', 'icon'], '-15'],
    // get the title name from the source's "title" property
    'text-field': ['get', 'title'],
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top'
    }
    });
    });

    var marker = new mapboxgl.Marker()
.setLngLat([-89.7621712, 30.2838493])
.addTo(map);

map.addControl(new mapboxgl.FullscreenControl());

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    })
    );