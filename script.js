function compute()
{
    var p = document.getElementById("Amount").value;
   float r= document.getElementById("Interest rate").value;
    var n= document.getElementById("No. of years").value;
     Compute Interest = (p*r*n)/100;
    result= document.getElementById("Compute Interest");
    result.innerHTML="If you deposit + P, at an interest rate of + r. You will receive an amount of + result, in the year + No. of years";
    
    
}
        
