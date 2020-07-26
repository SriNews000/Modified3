window.onload = function(){getNewsStats();}


function getNewsStats() {
    fetch('https://gnews.io/api/v3/search?q=asia&token=9335a76f3d9fc2c31ac210b3360a79b4')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		
		var titleValue = data ['articles'][0]['title'];
        var imageValue = data ['articles'][0]['image'];
        var descriptionValue = data ['articles'][0]['description'];
        var urllValue = data ['articles'][0]['url'];
        var publishedValue = data ['articles'][0]['publishedAt'];

        var titleValue1 = data ['articles'][1]['title'];
        var imageValue1 = data ['articles'][1]['image'];
        var descriptionValue1 = data ['articles'][1]['description'];
        var urllValue1 = data ['articles'][1]['url'];
        var publishedValue1= data ['articles'][1]['publishedAt'];

        var titleValue2 = data ['articles'][2]['title'];
        var imageValue2 = data ['articles'][2]['image'];
        var descriptionValue2 = data ['articles'][2]['description'];
        var urllValue2 = data ['articles'][2]['url'];
        var publishedValue2= data ['articles'][2]['publishedAt'];

        var titleValue3 = data ['articles'][3]['title'];
        var imageValue3 = data ['articles'][3]['image'];
        var descriptionValue3 = data ['articles'][3]['description'];
        var urllValue3 = data ['articles'][3]['url'];
        var publishedValue3= data ['articles'][3]['publishedAt'];

        var titleValue4 = data ['articles'][4]['title'];
        var imageValue4 = data ['articles'][4]['image'];
        var descriptionValue4 = data ['articles'][4]['description'];
        var urllValue4 = data ['articles'][4]['url'];
        var publishedValue4= data ['articles'][4]['publishedAt'];

        var titleValue5 = data ['articles'][5]['title'];
        var imageValue5 = data ['articles'][5]['image'];
        var descriptionValue5 = data ['articles'][5]['description'];
        var urllValue5 = data ['articles'][5]['url'];
        var publishedValue5= data ['articles'][5]['publishedAt'];

        var titleValue6 = data ['articles'][6]['title'];
        var imageValue6 = data ['articles'][6]['image'];
        var descriptionValue6 = data ['articles'][6]['description'];
        var urllValue6 = data ['articles'][6]['url'];
        var publishedValue6= data ['articles'][6]['publishedAt'];

        var titleValue7 = data ['articles'][7]['title'];
        var imageValue7 = data ['articles'][7]['image'];
        var descriptionValue7 = data ['articles'][7]['description'];
        var urllValue7 = data ['articles'][7]['url'];
        var publishedValue7= data ['articles'][7]['publishedAt'];
        
        var titleValue8 = data ['articles'][8]['title'];
        var imageValue8 = data ['articles'][8]['image'];
        var descriptionValue8 = data ['articles'][8]['description'];
        var urllValue8 = data ['articles'][8]['url'];
        var publishedValue8= data ['articles'][8]['publishedAt'];




        


       
    
        //first date
        var published = document.createElement("h3");
        var node = document.createTextNode("Published Date :");
        published.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(published);

        var published1 = document.createElement("p");
        var node = document.createTextNode(publishedValue);
        published1.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(published1);

        
    
        
        
        
        
        //first title
        
        var title = document.createElement("h3");
        var node = document.createTextNode("Title :");
        title.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(title);
    
        
        var title1 = document.createElement("p");
        var node = document.createTextNode(titleValue);
        title1.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(title1);
              //first description
        var description = document.createElement("h3");
        var node = document.createTextNode("Description :");
        description.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(description);

        var description1 = document.createElement("h3");
        var node = document.createTextNode(descriptionValue);
        description1.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(description1);
// image
        var x = document.createElement("IMG");
        x.setAttribute("src", imageValue);
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        var element = document.getElementById("div1");
        element.appendChild(x);
       

        var str = "More Details!";
        var result = str.link(urllValue);
        document.getElementById("div2").innerHTML = result;



        //============================================second grid==================================================
        var published = document.createElement("h3");
        var node = document.createTextNode("Published Date :");
        published.appendChild(node);
        var element = document.getElementById("div3");
        element.appendChild(published);

        var published1 = document.createElement("p");
        var node = document.createTextNode(publishedValue1);
        published1.appendChild(node);
        var element = document.getElementById("div3");
        element.appendChild(published1);

         //first title
        
         var title = document.createElement("h3");
         var node = document.createTextNode("Title :");
         title.appendChild(node);
         var element = document.getElementById("div3");
         element.appendChild(title);
     
         
         var title1 = document.createElement("p");
         var node = document.createTextNode(titleValue1);
         title1.appendChild(node);
         var element = document.getElementById("div3");
         element.appendChild(title1);
               //first description
         var description = document.createElement("h3");
         var node = document.createTextNode("Description :");
         description.appendChild(node);
         var element = document.getElementById("div3");
         element.appendChild(description);
 
         var description1 = document.createElement("h3");
         var node = document.createTextNode(descriptionValue1);
         description1.appendChild(node);
         var element = document.getElementById("div3");
         element.appendChild(description1);
 // image
         var x = document.createElement("IMG");
         x.setAttribute("src", imageValue1);
         x.setAttribute("width", "304");
         x.setAttribute("height", "228");
         x.setAttribute("alt", "The Pulpit Rock");
         var element = document.getElementById("div3");
         element.appendChild(x);
        
 
         var str = "More Details!";
         var result = str.link(urllValue1);
         document.getElementById("div4").innerHTML = result;


//============================================third grid==================================================
var published = document.createElement("h3");
var node = document.createTextNode("Published Date :");
published.appendChild(node);
var element = document.getElementById("div5");
element.appendChild(published);

var published1 = document.createElement("p");
var node = document.createTextNode(publishedValue2);
published1.appendChild(node);
var element = document.getElementById("div5");
element.appendChild(published1);

 //first title

 var title = document.createElement("h3");
 var node = document.createTextNode("Title :");
 title.appendChild(node);
 var element = document.getElementById("div5");
 element.appendChild(title);

 
 var title1 = document.createElement("p");
 var node = document.createTextNode(titleValue2);
 title1.appendChild(node);
 var element = document.getElementById("div5");
 element.appendChild(title1);
       //first description
 var description = document.createElement("h3");
 var node = document.createTextNode("Description :");
 description.appendChild(node);
 var element = document.getElementById("div5");
 element.appendChild(description);

 var description1 = document.createElement("h3");
 var node = document.createTextNode(descriptionValue2);
 description1.appendChild(node);
 var element = document.getElementById("div5");
 element.appendChild(description1);
// image
 var x = document.createElement("IMG");
 x.setAttribute("src", imageValue2);
 x.setAttribute("width", "304");
 x.setAttribute("height", "228");
 x.setAttribute("alt", "The Pulpit Rock");
 var element = document.getElementById("div5");
 element.appendChild(x);


 var str = "More Details!";
 var result = str.link(urllValue2);
 document.getElementById("div6").innerHTML = result;



  //============================================fourth grid==================================================
var published = document.createElement("h3");
var node = document.createTextNode("Published Date :");
published.appendChild(node);
var element = document.getElementById("div7");
element.appendChild(published);

var published1 = document.createElement("p");
var node = document.createTextNode(publishedValue3);
published1.appendChild(node);
var element = document.getElementById("div7");
element.appendChild(published1);

 //first title

 var title = document.createElement("h3");
 var node = document.createTextNode("Title :");
 title.appendChild(node);
 var element = document.getElementById("div7");
 element.appendChild(title);

 
 var title1 = document.createElement("p");
 var node = document.createTextNode(titleValue3);
 title1.appendChild(node);
 var element = document.getElementById("div7");
 element.appendChild(title1);
       //first description
 var description = document.createElement("h3");
 var node = document.createTextNode("Description :");
 description.appendChild(node);
 var element = document.getElementById("div7");
 element.appendChild(description);

 var description1 = document.createElement("h3");
 var node = document.createTextNode(descriptionValue3);
 description1.appendChild(node);
 var element = document.getElementById("div7");
 element.appendChild(description1);
// image
 var x = document.createElement("IMG");
 x.setAttribute("src", imageValue3);
 x.setAttribute("width", "304");
 x.setAttribute("height", "228");
 x.setAttribute("alt", "The Pulpit Rock");
 var element = document.getElementById("div7");
 element.appendChild(x);


 var str = "More Details!";
 var result = str.link(urllValue3);
 document.getElementById("div8").innerHTML = result;

  //============================================fifth grid==================================================
  var published = document.createElement("h3");
  var node = document.createTextNode("Published Date :");
  published.appendChild(node);
  var element = document.getElementById("div9");
  element.appendChild(published);
  
  var published1 = document.createElement("p");
  var node = document.createTextNode(publishedValue4);
  published1.appendChild(node);
  var element = document.getElementById("div9");
  element.appendChild(published1);
  
   //first title
  
   var title = document.createElement("h3");
   var node = document.createTextNode("Title :");
   title.appendChild(node);
   var element = document.getElementById("div9");
   element.appendChild(title);
  
   
   var title1 = document.createElement("p");
   var node = document.createTextNode(titleValue4);
   title1.appendChild(node);
   var element = document.getElementById("div9");
   element.appendChild(title1);
         //first description
   var description = document.createElement("h3");
   var node = document.createTextNode("Description :");
   description.appendChild(node);
   var element = document.getElementById("div9");
   element.appendChild(description);
  
   var description1 = document.createElement("h3");
   var node = document.createTextNode(descriptionValue4);
   description1.appendChild(node);
   var element = document.getElementById("div9");
   element.appendChild(description1);
  // image
   var x = document.createElement("IMG");
   x.setAttribute("src", imageValue4);
   x.setAttribute("width", "304");
   x.setAttribute("height", "228");
   x.setAttribute("alt", "The Pulpit Rock");
   var element = document.getElementById("div9");
   element.appendChild(x);
  
  
   var str = "More Details!";
   var result = str.link(urllValue4);
   document.getElementById("div10").innerHTML = result;

  //============================================sixth grid==================================================
  var published = document.createElement("h3");
  var node = document.createTextNode("Published Date :");
  published.appendChild(node);
  var element = document.getElementById("div11");
  element.appendChild(published);
  
  var published1 = document.createElement("p");
  var node = document.createTextNode(publishedValue5);
  published1.appendChild(node);
  var element = document.getElementById("div11");
  element.appendChild(published1);
  
   //first title
  
   var title = document.createElement("h3");
   var node = document.createTextNode("Title :");
   title.appendChild(node);
   var element = document.getElementById("div11");
   element.appendChild(title);
  
   
   var title1 = document.createElement("p");
   var node = document.createTextNode(titleValue5);
   title1.appendChild(node);
   var element = document.getElementById("div11");
   element.appendChild(title1);
         //first description
   var description = document.createElement("h3");
   var node = document.createTextNode("Description :");
   description.appendChild(node);
   var element = document.getElementById("div11");
   element.appendChild(description);
  
   var description1 = document.createElement("h3");
   var node = document.createTextNode(descriptionValue5);
   description1.appendChild(node);
   var element = document.getElementById("div11");
   element.appendChild(description1);
  // image
   var x = document.createElement("IMG");
   x.setAttribute("src", imageValue5);
   x.setAttribute("width", "304");
   x.setAttribute("height", "228");
   x.setAttribute("alt", "The Pulpit Rock");
   var element = document.getElementById("div11");
   element.appendChild(x);
  
  
   var str = "More Details!";
   var result = str.link(urllValue5);
   document.getElementById("div12").innerHTML = result;

  //============================================seventh grid==================================================
  var published = document.createElement("h3");
  var node = document.createTextNode("Published Date :");
  published.appendChild(node);
  var element = document.getElementById("div13");
  element.appendChild(published);
  
  var published1 = document.createElement("p");
  var node = document.createTextNode(publishedValue6);
  published1.appendChild(node);
  var element = document.getElementById("div13");
  element.appendChild(published1);
  
   //first title
  
   var title = document.createElement("h3");
   var node = document.createTextNode("Title :");
   title.appendChild(node);
   var element = document.getElementById("div13");
   element.appendChild(title);
  
   
   var title1 = document.createElement("p");
   var node = document.createTextNode(titleValue6);
   title1.appendChild(node);
   var element = document.getElementById("div13");
   element.appendChild(title1);
         //first description
   var description = document.createElement("h3");
   var node = document.createTextNode("Description :");
   description.appendChild(node);
   var element = document.getElementById("div13");
   element.appendChild(description);
  
   var description1 = document.createElement("h3");
   var node = document.createTextNode(descriptionValue6);
   description1.appendChild(node);
   var element = document.getElementById("div13");
   element.appendChild(description1);
  // image
   var x = document.createElement("IMG");
   x.setAttribute("src", imageValue6);
   x.setAttribute("width", "304");
   x.setAttribute("height", "228");
   x.setAttribute("alt", "The Pulpit Rock");
   var element = document.getElementById("div13");
   element.appendChild(x);
  
  
   var str = "More Details!";
   var result = str.link(urllValue6);
   document.getElementById("div14").innerHTML = result;

 //============================================eigdht grid==================================================
 var published = document.createElement("h3");
 var node = document.createTextNode("Published Date :");
 published.appendChild(node);
 var element = document.getElementById("div15");
 element.appendChild(published);
 
 var published1 = document.createElement("p");
 var node = document.createTextNode(publishedValue7);
 published1.appendChild(node);
 var element = document.getElementById("div15");
 element.appendChild(published1);
 
  //first title
 
  var title = document.createElement("h3");
  var node = document.createTextNode("Title :");
  title.appendChild(node);
  var element = document.getElementById("div15");
  element.appendChild(title);
 
  
  var title1 = document.createElement("p");
  var node = document.createTextNode(titleValue7);
  title1.appendChild(node);
  var element = document.getElementById("div15");
  element.appendChild(title1);
        //first description
  var description = document.createElement("h3");
  var node = document.createTextNode("Description :");
  description.appendChild(node);
  var element = document.getElementById("div15");
  element.appendChild(description);
 
  var description1 = document.createElement("h3");
  var node = document.createTextNode(descriptionValue7);
  description1.appendChild(node);
  var element = document.getElementById("div15");
  element.appendChild(description1);
 // image
  var x = document.createElement("IMG");
  x.setAttribute("src", imageValue7);
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  var element = document.getElementById("div15");
  element.appendChild(x);
 
 
  var str = "More Details!";
  var result = str.link(urllValue7);
  document.getElementById("div16").innerHTML = result;
 
 
 //============================================ninth grid==================================================
 var published = document.createElement("h3");
 var node = document.createTextNode("Published Date :");
 published.appendChild(node);
 var element = document.getElementById("div17");
 element.appendChild(published);
 
 var published1 = document.createElement("p");
 var node = document.createTextNode(publishedValue8);
 published1.appendChild(node);
 var element = document.getElementById("div17");
 element.appendChild(published1);
 
  //first title
 
  var title = document.createElement("h3");
  var node = document.createTextNode("Title :");
  title.appendChild(node);
  var element = document.getElementById("div17");
  element.appendChild(title);
 
  
  var title1 = document.createElement("p");
  var node = document.createTextNode(titleValue8);
  title1.appendChild(node);
  var element = document.getElementById("div17");
  element.appendChild(title1);
        //first description
  var description = document.createElement("h3");
  var node = document.createTextNode("Description :");
  description.appendChild(node);
  var element = document.getElementById("div17");
  element.appendChild(description);
 
  var description1 = document.createElement("h3");
  var node = document.createTextNode(descriptionValue8);
  description1.appendChild(node);
  var element = document.getElementById("div17");
  element.appendChild(description1);
 // image
  var x = document.createElement("IMG");
  x.setAttribute("src", imageValue8);
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  var element = document.getElementById("div17");
  element.appendChild(x);
 
 
  var str = "More Details!";
  var result = str.link(urllValue8);
  document.getElementById("div18").innerHTML = result;
 
 
  
  
  
  
  
  
  


  
  
  




 

        
    })
	.catch(function() {
		console.log("error");
	})
	
}







