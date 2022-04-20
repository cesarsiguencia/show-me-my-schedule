// add id's as time 1,2,3,4,5 to divs under the calendar

var assignments = []
var scheduleArea = document.querySelector(".container")
var hourBoxArea = document.querySelector(".row")

var timeElement = document.querySelector("#currentDay")
var AM9 = document.querySelector("#one")
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
    assignments = saved
    console.log(assignments)

    assignments.forEach(task => {
        console.log(task)

        var pickedBoxId = task.id
        console.log(pickedBoxId)

        var pickedBoxArea = document.querySelector(".row[data-target='" + pickedBoxId+ "']")

        var taskText = pickedBoxArea.querySelector("textarea")

        taskText.innerHTML = task.textBox

        var time = moment(task.block, "L").set("hour", 17);

        console.log(time)
        // if(moment(time).isAfter(moment().format('MMMM Do YYYY, 09:00 a'))){
        //     AM9.addClass(".past")
        // }
    })






    // var load9AM = function(){


    // }

    // load9AM()

    // var load10AM = function(){
    //     var time = moment().format('10:00')
    //     // AM10.innerHTML = "<p>" + time + "</p>";
    // }
    // load10AM()

    // var load11AM = function(){
    //     var time = moment().format('11:00')
    //     // AM11.innerHTML = "<p>" + time + "</p>";
    // }
    // load11AM()

}
loadTasks()

var saveTasks = function(event){

    var targetEl = event.target

    if(targetEl.matches('.saveBtn')){
    var pickedTextTarget = event.target.getAttribute('data-target')
    console.log(pickedTextTarget)
    }

    var pickedBoxArea = document.querySelector(".row[data-target='" +pickedTextTarget+ "']")
    console.log(pickedBoxArea)

    var pickedBoxAreaId = pickedBoxArea.getAttribute("data-target")
    console.log(pickedBoxAreaId)

    // var pickedBoxTextArea = 

    
    // console.log(pickedBoxArea)


    // if(pickedTextTarget = )

  


    var taskText = pickedBoxArea.querySelector("textarea").value
    console.log(taskText)
    var time = moment().format('MMMM Do YYYY, h:mm a')

    var task = {
            id: pickedBoxAreaId,
            textBox: taskText,
            block: time,
    }
    console.log(task)
    assignments.push(task)
    console.log(assignments)

    localStorage.setItem("tasks", JSON.stringify(assignments))

}

scheduleArea.addEventListener("click", saveTasks);

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