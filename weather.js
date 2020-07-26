var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")

button.addEventListener('click',function(){  
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value + '&appid=6fa19a6b840e2d8ede589918d1cd8946')
    .then(response => response.json() )
    .then(data => {//console.log(data))
        var nameValue = inputValue.value;
       
       
        var tempValue = data ['main']['temp'];
        var descValue = data ['weather'][0]['description'];
        var humidityValue = data ['main']['humidity'];
       //icon
       

       
    
       //main
        var description = document.createElement("h3");
        var node = document.createTextNode("main :");
        description.appendChild(node);
        var element = document.getElementById("main");
        element.appendChild(description);

        var description1 = document.createElement("p");
        var node = document.createTextNode(descValue);
        description1.appendChild(node);
        var element = document.getElementById("main");
        element.appendChild(description1);

       
        
    
    
    
    
        //temperature
        var temperature = document.createElement("h3");
        var node = document.createTextNode("Temperature :");
        temperature.appendChild(node);
        var element = document.getElementById("details");
        element.appendChild(temperature);

        var temperature1 = document.createElement("p");
        var node = document.createTextNode(tempValue);
        temperature1.appendChild(node);
        var element = document.getElementById("details");
        element.appendChild(temperature1);

        //humidity

        var humidity = document.createElement("h3");
        var node = document.createTextNode("Humidity :");
        humidity.appendChild(node);
        var element = document.getElementById("humidity");
        element.appendChild(humidity);

        var humidity1 = document.createElement("p");
        var node = document.createTextNode(humidityValue);
        humidity1.appendChild(node);
        var element = document.getElementById("humidity");
        element.appendChild(humidity1);
    
    
    
    
    
    
    
    
    
    
    
    
    
    })

    
    .catch(err => alert("Wrong city name!"))
   
    })

    function myFunction2() { 
        document.getElementById("main").innerHTML ="";
        document.getElementById("details").innerHTML ="";
        document.getElementById("humidity").innerHTML ="";
       
    
        
    } 
    
    