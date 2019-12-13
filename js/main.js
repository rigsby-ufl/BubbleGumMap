function createMap(){
   
  // Required Variables
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; 
  
    var apitoken = 'pk.eyJ1IjoiZHVtcGxlZmluayIsImEiOiJjazQzbG8zMGowNjhvM3FtdmI1YnJmNTU4In0.hgrqFm13u-ql7OyIpRQXdA' 
    
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //For Custom basemaps - Replace your username and StyleID
    var bubblegum = L.tileLayer(mbStyleUrl, {id: 'dumplefink/ck43lr36u09ox1cokygqjp3i6', token: apitoken,  attribution: mbAttr});
  
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken, attribution: mbAttr})
    
    //For MabBox Standard Basemaps
    var standardBasemap   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    // Create the map
    var map = L.map('map', {
      center: [9.75, -83.75],// Centered on Costa Rica
      zoom: 8, // zoom level
      layers: bubblegum // basemap
    });
  
    // Create the basemap control layer
    var baseLayers = {
      "Outdoors": outdoors,
      "Bubblegum Terrain": bubblegum
    };
    
    L.control.layers(baseLayers).addTo(map);
};

// Call the function
$(document).ready(createMap);