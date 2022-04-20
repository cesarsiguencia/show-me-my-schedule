// add id's as time 1,2,3,4,5 to divs under the calendar

var assignments = []
var scheduleArea = document.querySelector(".container")
var hourBoxArea = document.querySelector(".row")
var timeElement = document.querySelector("#currentDay")


var showTime = function(){
    var time = moment().format('MMMM Do YYYY, h:mm a')
    timeElement.innerHTML = "<p>" + time + "</p>";
}
showTime()
setInterval(showTime ,10000)


var loadTasks = function(){
    var saved = JSON.parse(localStorage.getItem("tasks"))
    assignments = saved

    if(!assignments){
        assignments = []
    }

    assignments.forEach(task => {
        var pickedBoxId = task.id
        var pickedBoxArea = document.querySelector(".row[data-target='" + pickedBoxId+ "']")
        var taskText = pickedBoxArea.querySelector("textarea")

        taskText.innerHTML = task.textBox

        var time = moment(task.block, "L").set("hour", 17);
        // console.log(time)
        // if(moment(time).isAfter(moment().format('MMMM Do YYYY, 09:00 a'))){
        //     AM9.addClass(".past")
        // }
    })
}
loadTasks()

var saveTasks = function(event){
    var targetEl = event.target

    if(targetEl.matches('.saveBtn')){
        var pickedBtnId = event.target.getAttribute('data-target')
    }

    var pickedBoxArea = document.querySelector(".row[data-target='" +pickedBtnId+ "']")

    var pickedBoxAreaId = pickedBoxArea.getAttribute("data-target")
    var taskText = pickedBoxArea.querySelector("textarea").value
    var time = moment().format('MMMM Do YYYY, h:mm a')

    var task = {
            id: pickedBoxAreaId,
            textBox: taskText,
            block: time,
    }

    assignments.push(task)
    localStorage.setItem("tasks", JSON.stringify(assignments))
}

scheduleArea.addEventListener("click", saveTasks);


// var refreshTasks = function(){

//     if(moment().isAfter(time)){
//         timeBlocks.addClass('row')
//     }
// }
