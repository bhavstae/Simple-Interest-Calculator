function compute()
{
    var p = document.getElementById("Amount").value;
    if(parseInt(p) < 1) {
		alert("Enter a positive number");
		document.getElementById("p").focus();
		return;
	}
   var r = document.getElementById("Interest rate").value;
    var n= document.getElementById("No. of years").value;
     Compute Interest = (p*r*n)/100;
     var FY = new Date().getFullYear() + n;
    result= document.getElementById("Compute Interest");
    result.innerHTML="<br/> result : If you deposit  <mark>" + p + "</mark>,<br/>" +
        "at an interest rate of  <mark>" + r + "</mark>,<br/><br/>" +
        "You will receive an amount of  <mark>" + Compute Interest + "</mark>,<br/> " +
        "in the year <mark>" + FY + "</mark><br/>";
}
        
