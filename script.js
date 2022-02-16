
function validamount(){
	 var principal = document.getElementById("prinicipal").value;
if(principal <= 0) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	
    return ;
}}
function showslider() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}
function compute()
{
    var principal = parseFloat(document.getElementById("principal").value;
   var rate = parseFloat(document.getElementById("ratespan").value);
    var Years= parseFloat(document.getElementById("Years").value);
     var Interest = (principal*rate*Years)/100;
    var currentYear = new Date().getFullYear();
    var finalYear = currentYear + Years;
	
    document.getElementById("result").innerHTML="<br />If you deposit <mark>"+principal+"</mark>,<br /> at an interest rate of <mark>"+rate+"%</mark>.
	<br />You will receive an amount of <mark>"+Interest+"</mark><br />in the year <mark>"+finalyear+"</mark>";

}
        

