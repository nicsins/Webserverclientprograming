let bridgeDate=[
    ['Verrazano-Narrows Bridge' ,'New York, NY' 	,1298.4 ,[	40.6066, -74.0447]],
    ['Golden Gate Bridge' 	,'San Francisco and Marin, CA ',	1280.2 ,	37.8199, -122.4783],
    ['Mackinac Bridge '	,'Mackinaw and St Ignace, MI \t',1158.0, 	45.8174, -84.7278],
    ['George Washington Bridge '	,'New York and New Jersey, NY ' ,	1067.0 ,	40.8517, -73.9527],
    ['Tacoma Narrows Bridge' ,	'Tacoma and Kitsap, WA ',	853.44, 	47.2690, -122.5517]];

var canvas = document.getElementById('bridge-chart');
console.log(canvas);
var ctx = canvas.getContext('2d');

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge" , "Golden Gate Bridge ", "Mackinac Bridge","George Washington Bridge ", "Tacoma Narrows Bridge"],
        datasets: [{
            label: 'Height of Bridge in Meters',
            data: [1298.4,1280.2, 1158.0, 1067.0, 853.44],
            backgroundColor: ['red', 'blue', 'yellow', 'green','orange']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})