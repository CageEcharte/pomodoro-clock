$(document).ready(function(){

var button = document.getElementById("button");
var title = document.getElementById("title");
var counter2 =  parseInt($(".num2").html());
var counter = parseInt($(".num1").html());


//var clock = 1499;
var countMin = document.getElementById('timeMin');
var countSec = document.getElementById('timeSec');

var myInterval = -1;
var myInterval2 = -1;
var time = parseInt($("#timeMin").html());
var buzzer = $("#buzzer")[0];
var i;

//button.addEventListener("click", function(event){
  function startPom () {
    i = 0;

    //write an if statement here stating if i = to something. then change .num2
    //inside the if statement that says to assign countMin to .num1
   var clock = counter2 * 60;

  if(myInterval == -1){

    myInterval = setInterval(function(){


      var currentMin = Math.floor(clock / 60);
      var currentSec = clock % 60;


       if (currentSec >= 0 && currentSec <= 9) {
          countMin.innerHTML = currentMin;
          countSec.innerHTML = "0" + currentSec;
          clock--;

       } else {
          countMin.innerHTML = currentMin;
          countSec.innerHTML = currentSec;
          clock--;

       }
      if(clock === -1){
         clearInterval(myInterval);
         buzzer.play();
         myInterval = -2;

         if(i === 1){
      startPomodoro();
    }
         if (i === 0){
      startBreak();
    }
       }
    }, 1000);

  }// else {
    //button.innerHTML = "Start";
   // clearInterval(myInterval);
   // myInterval = -1;

 }


///put closing on click here



function resetClock () {
 clearInterval(myInterval);
  countMin.innerHTML = counter2;
  countSec.innerHTML = "00";
  myInterval = -1;
  $("#button").show();

}

  function startBreak (){
    var clock2 = counter * 60;

    if(myInterval == -2){

      myInterval = setInterval(function(){


     var currentMin = Math.floor(clock2 / 60);
      var currentSec = clock2 % 60;

      if (currentSec >= 0 && currentSec <= 9) {
          countMin.innerHTML = currentMin;
          countSec.innerHTML = "0" + currentSec;
          clock2--;

       } else {
          countMin.innerHTML = currentMin;
          countSec.innerHTML = currentSec;
          clock2--;

       } if(clock2 === -1){
         clearInterval(myInterval);
         buzzer.play();

       }


    }, 1000);
    }
   i = 0;
  }

   $("#button").click(function() {
		startPom();
    $("#button").hide();
    $(".BREAK").hide();
    $("#5time").hide();
    $(".num1").hide();
    $("#5time2").hide();
    $(".SESSION").hide();
    $("#25time").hide();
    $(".num2").hide();
    $("#25time2").hide();
    $(".timeWrap").animate({"font-size":"84px"});
	});


  	$("#reset").click(function () {
		resetClock();
     $(".timeWrap").animate({"font-size": "40px"});
     $("#button").show();
    $(".BREAK").show();
    $("#5time").show();
    $(".num1").show();
    $("#5time2").show();
    $(".SESSION").show();
    $("#25time").show();
    $(".num2").show();
    $("#25time2").show();
	});

     //breaktimer

  $("#25time").click(function(){
  if(counter2 > 0){
    counter2 --;
    $(".num2").html(counter2);
    $("#timeMin").html(counter2);
  }
 event.preventDefault();
})

    $("#25time2").click(function(){
  if(counter2 >= 0){
    counter2 ++;
    $(".num2").html(counter2);
    $("#timeMin").html(counter2);


  }
event.preventDefault();
})

    $("#5time2").click(function(){
  if(counter >= 0){
    counter ++;
    $(".num1").html(counter);

  }
event.preventDefault();
})

    $("#5time").click(function(){
  if(counter > 0){
    counter --;
    $(".num1").html(counter);

  }
event.preventDefault();
})

  });
