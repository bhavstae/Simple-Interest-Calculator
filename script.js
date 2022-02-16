function compute()
{
    var p = parseInt(document.getElementById("Amount").value);
    if(p < 1) {
		alert("Enter a positive number");
		document.getElementById("p").focus();
		return;
	}
   var r = parseFloat(document.getElementById("Interest rate").value);
    var n= parseInt(document.getElementById("No. of years").value);
     Compute Interest = (p*r*n)/100;
     var FY = new Date().getFullYear() + n;
    result= document.getElementById("Compute Interest");
    result.innerHTML="<br/> Interest : If you deposit  <mark>" + p + "</mark>,<br/>" +
        "at an interest rate of  <mark>" + r + "</mark>,<br/><br/>" +
        "You will receive an amount of  <mark>" + Compute Interest + "</mark>,<br/> " +
        "in the year <mark>" + FY + "</mark><br/>";	
}
        function SliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}
