function showproperty(element)
{
	document.getElementById('imagetext').innerHTML=element.alt;
}

   function unDo(){
      var oldAlt = "Hover over an image for a description.<br>Click on an image to view it in a larger window."
      document.getElementById('imagetext').innerHTML = oldAlt;
      }