window.onload = function(){getCovidStats();}

function getCovidStats() {
    fetch('https://api.covid19api.com/summary')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
//Sri lanka		
		var nConfirmed = data["Countries"][160]["NewConfirmed"];
		var tConfirmed = data["Countries"][160]["TotalConfirmed"];
		
		var tDeaths = data["Countries"][160]["TotalDeaths"];
		var tRecoverd = data["Countries"][160]["TotalRecovered"];

		
		document.getElementById('newconfirmed').innerHTML = nConfirmed.toLocaleString('en');
		document.getElementById('totalconfirmed').innerHTML = tConfirmed.toLocaleString('en');
		
		document.getElementById('totaldeaths').innerHTML = tDeaths.toLocaleString('en');
		document.getElementById('totalrecovered').innerHTML = tRecoverd.toLocaleString('en');
//world
		var nConfirmed1 = data["Global"]["NewConfirmed"];
		var tConfirmed1 = data["Global"]["TotalConfirmed"];
		
		var tDeaths1 = data["Global"]["TotalDeaths"];
		var tRecoverd1 = data["Global"]["TotalRecovered"];

		
		document.getElementById('newconfirmed1').innerHTML = nConfirmed1.toLocaleString('en');
		document.getElementById('totalconfirmed1').innerHTML = tConfirmed1.toLocaleString('en');
		
		document.getElementById('totaldeaths1').innerHTML = tDeaths1.toLocaleString('en');
        document.getElementById('totalrecovered1').innerHTML = tRecoverd1.toLocaleString('en');
        
//india
       
var nConfirmed1 = data["Countries"][76]["NewConfirmed"];
var tConfirmed1 = data["Countries"][76]["TotalConfirmed"];

var tDeaths1 = data["Countries"][76]["TotalDeaths"];
var tRecoverd1 = data["Countries"][76]["TotalRecovered"];


document.getElementById('newconfirmed2').innerHTML = nConfirmed1.toLocaleString('en');
document.getElementById('totalconfirmed2').innerHTML = tConfirmed1.toLocaleString('en');
document.getElementById('totaldeaths2').innerHTML = tDeaths1.toLocaleString('en');
document.getElementById('totalrecovered2').innerHTML = tRecoverd1.toLocaleString('en');

//usa
var nConfirmed1 = data["Countries"][179]["NewConfirmed"];
var tConfirmed1 = data["Countries"][180]["TotalConfirmed"];

var tDeaths1 = data["Countries"][180]["TotalDeaths"];
var tRecoverd1 = data["Countries"][180]["TotalRecovered"];


document.getElementById('newconfirmed3').innerHTML = nConfirmed1.toLocaleString('en');
document.getElementById('totalconfirmed3').innerHTML = tConfirmed1.toLocaleString('en');

document.getElementById('totaldeaths3').innerHTML = tDeaths1.toLocaleString('en');
document.getElementById('totalrecovered3').innerHTML = tRecoverd1.toLocaleString('en');

//brazil
var nConfirmed1 = data["Countries"][23]["NewConfirmed"];
var tConfirmed1 = data["Countries"][23]["TotalConfirmed"];

var tDeaths1 = data["Countries"][23]["TotalDeaths"];
var tRecoverd1 = data["Countries"][23]["TotalRecovered"];


document.getElementById('newconfirmed4').innerHTML = nConfirmed1.toLocaleString('en');
document.getElementById('totalconfirmed4').innerHTML = tConfirmed1.toLocaleString('en');

document.getElementById('totaldeaths4').innerHTML = tDeaths1.toLocaleString('en');
document.getElementById('totalrecovered4').innerHTML = tRecoverd1.toLocaleString('en');



    })
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}

