function validamount(){
	 var p = parseFloat(document.getElementById("prinicipal"));
if(p < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return false;
    }
    return true;
}
function showslider(x) {
   
		 document.getElementById("rateSpan").innerText = x;
}
function compute()
{
    var p = parseFloat(document.getElementById("principal").value);
   var r = parseFloat(document.getElementById("ratespan").value);
    var n= parseFloat(document.getElementById("Years").value);
     var Interest = p*r*n/100;
     var FY = new Date().getFullYear() + Years;
    document.getElementById("result").innerHTML="<br />If you deposit <mark>"+principal+"</mark>,<br /> at an interest rate of <mark>"+ratespan+"%</mark>.
	<br />You will receive an amount of <mark>"+Interest+"</mark><br />in the year <mark>"+FY+"</mark>";

}
        

