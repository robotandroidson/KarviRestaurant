//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var percentTip = document.getElementById("percentTip").value;
  
    //validate input
    if (billAmt === "" || percentTip == 0) {
      alert("Please enter values");
      return;
    }
  
    //Calculate tip
    var total = (billAmt * percentTip);
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };