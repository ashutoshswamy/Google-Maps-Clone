let latitude = 19.7515;
let longitude = 75.7139;

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXNodXRvc2gzOTciLCJhIjoiY2t1Zmtmbnh1MDBsazJ2bm1mcXg2NjF3NiJ9.TOIQTLTbWC15NjJ7PjDOUg";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [longitude, latitude],
  zoom: 3.6,
});

map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  }),
  "top-left"
);

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })
);
