function validamount(){
	 var principal = document.getElementById("prinicipal").value;
if(principal <= 0) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	
    return ;
}}
function showslider(x) {
   
		 document.getElementById("rate").innerText = x;
}
function compute()
{
    var principal = parseFloat(document.getElementById("principal").value,10);
   var rate = parseFloat(document.getElementById("rate").value,10);
    var Years= parseFloat(document.getElementById("Years").value,10);
     var Interest = (principal*rate*Years)/100;
    var currentYear = new Date().getFullYear();
    var finalYear = currentYear + Years;
    document.getElementById("result").innerHTML="<br />If you deposit <mark>"+principal+"</mark>,<br /> at an interest rate of <mark>"+rate+"%</mark>.
	<br />You will receive an amount of <mark>"+Interest+"</mark><br />in the year <mark>"+finalyear+"</mark>";

}
        

