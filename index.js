let latitude = 22.3511148;
let longitude = 78.6677428;

mapboxgl.accessToken = "your mapbox token";

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
