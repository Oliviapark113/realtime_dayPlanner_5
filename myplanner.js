
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
var timeBlock = document.querySelector(".time-block");

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



//render timeblock

var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];


// savedTimeBlock()
function renderTimeBlock() {
    for (var i = 0; i < workHours.length; i++) {
        timeBlock.innerHTML = 
        localStorage.getItem(dataTime)

        var pastTime = workHours.filter((workhour) => workhour < currentHour);
        console.log(pastTime[i])
       
    
        switch (pastTime[i]) {
            case 9:
                nineAm.addClass("past form-control time-block");
                break;
            case 10:
                tenAm.addClass("past form-control time-block");
                break;
            case 11:
                eleAm.addClass("past form-control time-block");
            case 12:
                twelPm.addClass("past form-control time-block");
                break;
            case 13:
                onePm.addClass("past form-control time-block");
                break;
            case 14:
                twoPm.addClass("past form-control time-block");
            case 15:
                threePm.addClass("past form-control time-block");
                break;
            case 16:
                fourPm.addClass("past form-control time-block");
                break;
            case 17:
                fivePm.addClass("past form-control time-block");
        }


        var presentTime = workHours.filter((workhour) => workhour === currentHour)
        console.log(presentTime[i])
       

        switch (presentTime[i]) {
            case 9:
                nineAm.addClass("present form-control time-block");
                break;
            case 10:
                tenAm.addClass("present form-control time-block");
                break;
            case 11:
                eleAm.addClass("present form-control time-block");
                break;
            case 12:
                twelPm.addClass("present form-control time-block");
                break;
            case 13:
                onePm.addClass("present form-control time-block");
                break;
            case 14:
                twoPm.addClass("present form-control time-block");
                break;
            case 15:
                threePm.addClass("present form-control time-block");
                break;
            case 16:
                fourPm.addClass("present form-control time-block");
                break;
            case 17:
                fivePm.addClass("present form-control time-block");
                break;


        }


        var futureTime = workHours.filter((workhour) => workhour > currentHour)
       
        switch (futureTime[i]) {
            case 9:
                nineAm.addClass("future form-control time-block");
                break;
            case 10:
                tenAm.addClass("future form-control time-block");
                break;
            case 11:
                eleAm.addClass("future form-control time-block");
                break;
            case 12:
                twelPm.addClass("future form-control time-block");
                break;
            case 13:
                onePm.addClass("future form-control time-block");
                break;
            case 14:
                twoPm.addClass("future form-control time-block");
                break;
            case 15:
                threePm.addClass("future form-control time-block");
                break;
            case 16:
                fourPm.addClass("future form-control time-block");
                break;
            case 17:
                fivePm.addClass("future form-control time-block");
                break;

        }

    }

}

renderTimeBlock()

var  dataTime;
var dataValue;

$(".saveBtn").on("click", function(){
//   console.log(dataValue)
 dataTime = $(this).attr("data-time");
 dataValue = this.previousElementSibling.value

 localStorage.setItem(dataTime, dataValue)


})

$(".saveBtn").each(function() {
    // here you are recovering the data-time from every button 
    var dataTime = $(this).attr("data-time");
   /// here you read the localstorage to see if you have something stored
    var info =localStorage.getItem(dataTime)
   this.previousElementSibling.value = info
   
   })



 


