// Array with latitude and longitude 
let centerTile = [40.50, -101.22];

// Create the map 
let map = L.map('US-map').setView(centerTile, 4);

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map);
//custom image
// var bridgeMarker
var bridgeIcon= L.icon({
    iconUrl:'../img/Bridge-icon.png',
    iconSize:[25,225],

});
// Add some markers 
let Verranzo= [	40.6066, -74.0447];
let VerrazanoMarker = L.marker(Verranzo)
    .bindPopup("Verrazano-Narrows Bridge ,New York, NY <br><img src='../img/Verrazano%20Narrows%20Bridge%2042.jpg' alt='V-NBridge'><br>1298.4m")
    .addTo(map);

let GoldenGate = [37.8199, -122.4783];
let stpMarker = L.marker(GoldenGate)
    .bindPopup("Golden Gate Bridge ,San Francisco and Marin, CA <br><img src='../img/Golden_Gate_Bridge_as_seen_from_Marshall%25u2019s_Beach,_March_2018.jpg' alt='GG'><br>1280.2m")
    .addTo(map);

let Mackinac = [45.8174,-84.7278];
let MackinacMkr=L.marker(Mackinac).bindPopup("Mackinac Bridge \tMackinaw and St Ignace, MI \t1158m").addTo(map);

let GWash=[40.8517, -73.9527];
let GWashMkr=L.marker(GWash).bindPopup("George Washington Bridge ,New York and New Jersey, NY  ,\t1067.0m").addTo(map);

let Tacoma=[47.2690, -122.5517];
let TacomaMka=L.marker(Tacoma).bindPopup("Tacoma Narrows Bridge ,Tacoma and Kitsap, WA ,\t853.44").addTo(map);



// var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
// var beachMarker = new google.maps.Marker({
//     position: {lat: -33.890, lng: 151.274},
//     map: map,
//     icon: image
// });




let bridgeDate=[
    ['Verrazano-Narrows Bridge' ,'New York, NY' 	,1298.4 ,[	40.6066, -74.0447]],
    ['Golden Gate Bridge' 	,'San Francisco and Marin, CA ',	1280.2 ,	37.8199, -122.4783],
    ['Mackinac Bridge '	,'Mackinaw and St Ignace, MI \t',1158.0, 	45.8174, -84.7278],
    ['George Washington Bridge '	,'New York and New Jersey, NY ' ,	1067.0 ,	40.8517, -73.9527],
    ['Tacoma Narrows Bridge' ,	'Tacoma and Kitsap, WA ',	853.44, 	47.2690, -122.5517]];


