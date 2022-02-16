function compute()
{
    var p = parseInt(document.getElementById("Amount").value);
   var r = parseFloat(document.getElementById("Interest rate").value);
    var n= parseInt(document.getElementById("No. of Years").value);
     Compute Interest = (p*r*n)/100;
     var FY = new Date().getFullYear() + n;
    document.getElementById("ComputeInterest").innerHTML="<br/>If you deposit  <mark>" + p + "</mark>,<br/>" +
        "at an interest rate of  <mark>" + r + "</mark>,<br/><br/>" +
        "You will receive an amount of  <mark>" + Compute Interest + "</mark>,<br/> " +
        "in the year <mark>" + FY + "</mark><br/>";

}
        function showslider() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("r").value;
}

function validamount(){
	 var p = document.getElementById("p").value;
if(p < 1) {
		alert("Enter a positive number");
		document.getElementById("p").focus();
		return;
	}}
