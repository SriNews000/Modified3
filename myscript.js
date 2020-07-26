

// Image slider in Header---------------------------------------------------

var myIndex =0;
carousel();


function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++)
	  {
        x[i].style.display = "none";  
      }
      myIndex++;
	  
     if (myIndex > x.length) 
	 {
		 myIndex = 1
	 }    
		x[myIndex-1].style.display = "block";
		
      setTimeout(carousel, 4000); // Change image every 4 seconds
}

//check box in Form-----------------------------------------------------------

function enableButton()
{
	var x = document.getElementById("check");
	var y = document.getElementById("submit");
	
	if (x.checked == true)
	
	{
		y.disabled = false;			

	}
	
	else
	
	{
		y.disabled = true;
	
	}
}

//---------------------------------------------------------------------------------
