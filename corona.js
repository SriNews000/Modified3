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
		var nConfirmed2 = data["Countries"][76]["NewConfirmed"];
		var tConfirmed2 = data["Countries"][76]["TotalConfirmed"];
		var tDeaths2 = data["Countries"][76]["TotalDeaths"];
		var tRecoverd2 = data["Countries"][76]["TotalRecovered"];

		document.getElementById('newconfirmed2').innerHTML = nConfirmed2.toLocaleString('en');
		document.getElementById('totalconfirmed2').innerHTML = tConfirmed2.toLocaleString('en');
		document.getElementById('totaldeaths2').innerHTML = tDeaths2.toLocaleString('en');
		document.getElementById('totalrecovered2').innerHTML = tRecoverd2.toLocaleString('en');

		//usa
		var nConfirmed3 = data["Countries"][180]["NewConfirmed"];
		var tConfirmed3 = data["Countries"][180]["TotalConfirmed"];
		var tDeaths3 = data["Countries"][180]["TotalDeaths"];
		var tRecoverd3 = data["Countries"][180]["TotalRecovered"];

		document.getElementById('newconfirmed3').innerHTML = nConfirmed3.toLocaleString('en');
		document.getElementById('totalconfirmed3').innerHTML = tConfirmed3.toLocaleString('en');
		document.getElementById('totaldeaths3').innerHTML = tDeaths3.toLocaleString('en');
		document.getElementById('totalrecovered3').innerHTML = tRecoverd3.toLocaleString('en');

		//brazil
		var nConfirmed4 = data["Countries"][23]["NewConfirmed"];
		var tConfirmed4 = data["Countries"][23]["TotalConfirmed"];
		var tDeaths4 = data["Countries"][23]["TotalDeaths"];
		var tRecoverd4 = data["Countries"][23]["TotalRecovered"];

		document.getElementById('newconfirmed4').innerHTML = nConfirmed4.toLocaleString('en');
		document.getElementById('totalconfirmed4').innerHTML = tConfirmed4.toLocaleString('en');
		document.getElementById('totaldeaths4').innerHTML = tDeaths4.toLocaleString('en');
		document.getElementById('totalrecovered4').innerHTML = tRecoverd4.toLocaleString('en');

    })
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}

