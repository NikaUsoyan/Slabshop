var countDownDate = new Date("Jan 1, 2024 17:59:59").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var hours = Math.floor((distance % (1000 * 60 * 60 * 5 )) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("time").innerHTML =   hours ;

  document.getElementById("time-r").innerHTML =  minutes  ;

  document.getElementById("-time-").innerHTML = seconds ;

  document.getElementById("end-off").innerHTML = "Ends in"
    
  if (distance < 0) {

    clearInterval(x);
  document.getElementById("end-off").innerHTML = "It's Ends"
    document.getElementById("time").innerHTML =  "00"  ;

    document.getElementById("time-r").innerHTML =  "00"  ;
  
    document.getElementById("-time-").innerHTML = "00" ;
  }
  
}, 1000);

function patatas() {
  var x = document.getElementById("mydiv");
  var p = document.getElementById("sss");
  if (x.style.display === "none") {
    x.style.display = "block";
    
    p = document.getElementById("sss").innerHTML =( "Hide ");
  } else {
    x.style.display = "none";
    p = document.getElementById("sss").innerHTML =( "Show ");
  }
}
