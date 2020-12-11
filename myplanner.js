
//First link all files and API's together properly. 
//This means bootstrap, .js, Moment.js
var currentDay = document.querySelector("#currentDay");
var currentHour = moment().format('LT');

var now = moment().format('LLL');

// Indicate Current date and time .. on front page
function displayCurrentDay() {
    currentDay.textContent = now;
}

displayCurrentDay();

//Current Hour 
var currentDate = new Date();
var currentHour = currentDate.getHours();
console.log(currentHour)
//Assign id to each time-block area.

var nineAm = $("#nineAm");
var tenAm = $("#tenAm");
var eleAm = $("#eleAm");
var twelPm = $("#twelPm");
var onePm = $("#onePm");
var twoPm = $("#twoPm");
var threePm = $("#threePm");
var fourPm = $("#fourPm");
var fivePm = $("#fivePm");

var timeBlock=[nineAm, tenAm ,eleAm ,twelPm,onePm,twoPm,threePm,fourPm,fivePm] 

//render timeblock
//setting workHours vaiables in array 
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];


// savedTimeBlock()
function renderTimeBlock() {
    for (var i = 0; i < workHours.length; i++) {
       
        if(workHours[i]< currentHour){
            timeBlock[i].addClass("past form-control time-block")

        }

        else if (workHours[i]=== currentHour){
            timeBlock[i].addClass("present form-control time-block")
        }

        else if (workHours[i]> currentHour){
            timeBlock[i].addClass("future form-control time-block")
        }
        

    }

}

renderTimeBlock()

var  dataTime;
var dataValue;
//when saveBtn clicked input value saved into localStorage.
$(".saveBtn").on("click", function(){
 dataTime = $(this).attr("data-time");
 dataValue = this.previousElementSibling.value

 localStorage.setItem(dataTime, dataValue)


})

$(".saveBtn").each(function() {
   //get value from localStorage.
   //so reassign dataTime key and value 
    var dataTime = $(this).attr("data-time");
    //Now add value into text area so value will pesist after refreshing.
    var info =localStorage.getItem(dataTime)
   this.previousElementSibling.value = info
   
   })



 


