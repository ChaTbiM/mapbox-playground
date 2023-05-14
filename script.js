// Access token for Mapbox API
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hhdGJpbSIsImEiOiJjbGhueTFrNDExcWEwM2ZwaDZqbWE1ajMyIn0._iTbot8cUuJ57Pwp-8pHzA";

// Initialize the map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11", // Choose your desired map style
  center: [-74.5, 40], // Set the initial center of the map
  zoom: 9, // Set the initial zoom level
});

// Define the locations for the markers
var locations = [
  {
    name: "Location 1",
    coordinates: [-74.5, 40], // Longitude, Latitude format
  },
  {
    name: "Location 2",
    coordinates: [-74.6, 40.2],
  },
  // Add more locations as needed
];

// Add markers to the map for each location
locations.forEach(function (location) {
  // Create a DOM element for the marker
  var el = document.createElement("div");
  el.className = "marker";
  el.style.backgroundImage = "url(https://placekitten.com/g/30/30)"; // Replace with your marker image URL
  el.style.width = "30px";
  el.style.height = "30px";

  // Create the marker
  new mapboxgl.Marker(el)
    .setLngLat(location.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // Add a popup
        .setHTML("<h3>" + location.name + "</h3>")
    ) // Customize the popup content
    .addTo(map);
});
