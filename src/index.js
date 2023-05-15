// Access token for Mapbox API
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hhdGJpbSIsImEiOiJjbGhueTFrNDExcWEwM2ZwaDZqbWE1ajMyIn0._iTbot8cUuJ57Pwp-8pHzA";

// Initialize the map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11", // Choose your desired map style
  center: [-82.4913, 27.8708], // Set the initial center of the map
  zoom: 10, // Set the initial zoom level
});

// Define the locations for the markers
var locations = [
  {
    name: "3005 N Adams St Tampa",
    coordinates: [-82.4913, 27.8708], // Longitude, Latitude format
    src: "1.jpg",
  },
  {
    name: "8101 140th St Seminole",
    coordinates: [-82.83241, 27.8466],
    src: "2.jpg",
  },
  {
    name: "922 E Columbus Dr Tampa",
    coordinates: [-82.44944, 27.96699],
    src: "3.jpg",
  },
  {
    name: "114 Euclid Loop Seffner",
    coordinates: [-82.280235, 27.985475],
    src: "4.jpg",
  },
  {
    name: "2012 E Seward St Tampa",
    coordinates: [-82.435475, 28.028465],
    src: "5.png",
  },
  {
    name: "10150 61st Way pinellas Park",
    coordinates: [-82.71741, 27.86385],
    src: "6.jpg",
  },
  // Add more locations as needed
];

const popupInstances = [];
const openPopupInstances = [];
// Add markers to the map for each location
locations.forEach(function (location, locationIndex) {
  // Create a DOM element for the marker
  const el = document.createElement("div");
  el.className = "marker";
  el.style.backgroundImage = "url(https://placekitten.com/g/30/30)"; // Replace with your marker image URL
  el.style.width = "30px";
  el.style.height = "30px";

  const popupNodeElement = document.createElement("div");
  popupNodeElement.classList.add("property__popup");

  const popupImg = document.createElement("img");
  popupImg.setAttribute("src", `../assets/${location.src}`);

  const popupTitle = document.createElement("h3");
  popupTitle.textContent = location.name;

  popupNodeElement.appendChild(popupImg);
  popupNodeElement.appendChild(popupTitle);

  const popup = new mapboxgl.Popup({ offset: 25 }) // Add a popup
    // .setHTML("<h3>" + location.name + "</h3>");
    .setDOMContent(popupNodeElement);

  // Create the marker
  new mapboxgl.Marker(el)
    .setLngLat(location.coordinates)
    .setPopup(popup) // Customize the popup content
    .addTo(map);
  popupInstances.push(popup);
});

const propertyImages = document.querySelectorAll(".property__image");

propertyImages.forEach((propertyImage, index) => {
  propertyImage.addEventListener("click", (event) => {
    if (openPopupInstances.length > 0) {
      openPopupInstances.forEach((openPopupInstance) =>
        openPopupInstance.remove()
      );
    }
    popupInstances[index].addTo(map);
    openPopupInstances.push(popupInstances[index]);
  });
});
