// add id's as time 1,2,3,4,5 to divs under the calendar

var assignments = {}
var scheduleArea = document.querySelector("#content-area")

var timeElement = document.querySelector("#currentDay")
var AM9 = document.querySelector("#block-one")
var AM9Btn = document.querySelector("#btn-one")
var AM10 = document.querySelector("#block-two")
var AM11 = document.querySelector("#block-three")



var showTime = function(){
    var time = moment().format('MMMM Do YYYY, h:mm a')
    timeElement.innerHTML = "<p>" + time + "</p>";


}
showTime()
setInterval(showTime ,10000)



var loadTasks = function(){

    var saved = JSON.parse(localStorage.getItem("tasks"))
    console.log(saved)

    var load9AM = function(){

        AM9.innerHTML = saved.nine9AM

        var time = moment(saved.block, "L").set("hour", 17);

        console.log(time)
        if(moment(time).isAfter(moment().format('MMMM Do YYYY, 09:00 a'))){
            AM9.addClass(".past")
        }
    }

    load9AM()

    var load10AM = function(){
        var time = moment().format('10:00')
        // AM10.innerHTML = "<p>" + time + "</p>";
    }
    load10AM()

    var load11AM = function(){
        var time = moment().format('11:00')
        // AM11.innerHTML = "<p>" + time + "</p>";
    }
    load11AM()

}
loadTasks()

var saveTasks = function(){


    var taskText = document.querySelector("textarea").value
    console.log(taskText)
    var time = moment().format('MMMM Do YYYY, h:mm a')

    assignments = {
        nine9AM: taskText,
        block: time    
    }

    console.log(assignments)

    localStorage.setItem("tasks", JSON.stringify(assignments))

}

AM9Btn.addEventListener("click", saveTasks);

// var grabAnswerValue = function(event){
//     var targetEl = event.target;

//     if(targetEl.matches('.button-style')){
//         var pickedAnswer = event.target.getAttribute('answer-value')
//         nextQuestion(pickedAnswer)
//     }
// }

// quiz.addEventListener("click", grabAnswerValue)



// var refreshTasks = function(){

//     if(moment().isAfter(time)){
//         timeBlocks.addClass('row')
//     }
// }






// var today = new Date();
// console.log(today)
// var day= today.getDay();
// // var daylist = ["Sunday", "Monday", Turesday",....]
// var month = today.getMonth();
// var monthlist =[];
// var date = today.getDate();
// var currentTime = today.getHours();



// for(let i = 9; i < 18, i++ ){
//     let timeCol = document.getElementById('i');
//     if (i < currentTime){
    
//     } else if (i .currentTime) {

//     } else {
        
//     }

// }
// if (date === 1 || date== 11 || date  === 21 || date === 31){
//     currentDatEl.textContent= daylist[day] + "," +monthlist[month  + " " +date+ "st";]
// }