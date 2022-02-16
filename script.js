function compute()
{
    var p = parseFloat(document.getElementById("Amount").value);
   var r = parseFloat(document.getElementById("Interest rate").value);
    var n= parseFloat(document.getElementById("No. of Years").value);
     var Interest = (p*r*n)/100;
     var FY = new Date().getFullYear() + n;
    document.getElementById("result").innerHTML="<br />If you deposit <mark>"+p+"</mark>,<br /> at an interest rate of <mark>"+r+"%</mark>.
	<br />You will receive an amount of <mark>"+Interest+"</mark><br />in the year <mark>"+FY+"</mark>";

}
        function showslider(x) {
   
		 document.getElementById("rateSpan").innerText = x;
}

function validamount(){
	 var p = document.getElementById("p").value;
if(p < 1) {
		alert("Enter a positive number");
		document.getElementById("p").focus();
		return;
	}}
