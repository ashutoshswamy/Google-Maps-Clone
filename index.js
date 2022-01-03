let latitude = 22.3511148;
let longitude = 78.6677428;

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXR6YXNodTM5NyIsImEiOiJja3h5Z3AwcHU1MGI2Mnh1YmYwaDdjMGl3In0.rBF1EuxSqMsMKF1oXAzidQ";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/outdoors-v11",
  center: [longitude, latitude],
  zoom: 5,
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
