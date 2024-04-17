function initialize() {
    // Initialize Leaflet map
    var leafletMap = L.map('mapdiv');
    leafletMap.setView([45.76602562237286, 4.839220303569716], 14); 
        
    // Load tiles from OpenStreetMap
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data ©OpenStreetMap contributors, CC-BY-SA, Imagery ©CloudMade',
        maxZoom: 18 
    }).addTo(leafletMap); // Add the base tiles to the Leaflet map object
	
    // Create markers 
	
  var lyonBuildings = [
    { 
        name: "Fresque Vegetale Lumiere", 
        location: [45.769653609563434, 4.827624282693176], 
        caption: "This mural showcases vibrant vegetation and light.",
        image: "fvl.jpg" 
    },
    { 
        name: "Fresque du cinema", 
        location: [45.754797270431844, 4.843686632535726], 
        caption: "A tribute to Lyon's cinematic heritage.",
        image: "fdc.jpg" 
    },
    { 
        name: "Fresque des Lyonnais", 
        location: [45.76808008703259, 4.828042496185927], 
        caption: "This mural celebrates the diverse people of Lyon.",
        image: "fdl.jpg" 
    },
    { 
        name: "Fresque la bibliotheque de la cite", 
        location: [45.76593195542847, 4.831114482692967], 
        caption: "A depiction of Lyon's library and its cultural significance.",
        image: "fbc.jpg" 
    },
    { 
        name: "Fresque Hommage a Tony Tollet", 
        location: [45.76833982701022, 4.82785245174534], 
        caption: "This mural pays homage to Tony Tollet, a prominent Lyon figure.",
        image: "fhtt.jpg" 
    },
    { 
        name: "Fresque Paul Bocuse", 
        location: [45.763756703787486, 4.850559399855292], 
        caption: "A tribute to Lyon's renowned chef, Paul Bocuse.",
        image: "fpc.jpg" 
    },
    { 
        name: "Fresque rue Hector Berlioz", 
        location: [45.77201979353501, 4.868622101705299], 
        caption: "This mural honors Hector Berlioz, a notable Lyon composer.",
        image: "frh.jpg" 
    },
    { 
        name: "Les fresques de la Sarra", 
        location: [45.761781506584754, 4.8148933538267125], 
        caption: "A collection of murals showcasing various themes.",
        image: "fs.jpg" 
    },
    { 
        name: "Mur des Canuts", 
        location: [45.778088641355545, 4.827984286362437], 
        caption: "This mural depicts Lyon's silk-weaving heritage.",
        image: "fmc.jpg" 
    }
];

    var myIcon = L.icon({
        iconUrl : 'marker.png',
        iconSize: [40, 40]
    });

    // Add markers on the Leaflet map
lyonBuildings.forEach(building => {
    var markerLocation = new L.LatLng(building.location[0], building.location[1]);
    var marker = new L.Marker(markerLocation, {icon: myIcon}).addTo(leafletMap);
    var popupContent = "<b>" + building.name + "</b><br>" + 
                       "<p>" + building.caption + "</p>" + 
                       "<img src='" + building.image + "' width='200'>";
    marker.bindPopup(popupContent);
});

  // Allow users to add custom markers
    function addCustomMarker() {
        // Prompt for details
        var name = prompt("Enter the name of the artwork or location of artwork:");
        var latitude = parseFloat(prompt("Latitude:"));
        var longitude = parseFloat(prompt("Longitude:"));

        // Validate latitude and longitude inputs
        if (isNaN(latitude) || isNaN(longitude)) {
            alert("Invalid input");
            return;
        }

        // Create a custom marker at the specified location
        var customMarker = L.marker([latitude, longitude]).addTo(leafletMap);
        customMarker.bindPopup("<b>" + name + "</b>").openPopup();
    }

    // Call the addCustomMarker function when a user clicks on a button or performs a specific action
    document.getElementById("addMarkerButton").addEventListener("click", addCustomMarker);
}