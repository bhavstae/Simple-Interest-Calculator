function validamount(){
	 var p = document.getElementById("prinicipal").value;
if(p <= 0) {
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
    var principal = parseFloat(document.getElementById("principal").value,10);
   var ratespan = parseFloat(document.getElementById("ratespan").value,10);
    var Years= parseFloat(document.getElementById("Years").value,10);
     var Interest = (principal*ratespan*Years)/100;
     var FY = new Date().getFullYear() + Years;
    document.getElementById("result").innerHTML="<br />If you deposit <mark>"+principal+"</mark>,<br /> at an interest rate of <mark>"+ratespan+"%</mark>.
	<br />You will receive an amount of <mark>"+Interest+"</mark><br />in the year <mark>"+FY+"</mark>";

}
        

