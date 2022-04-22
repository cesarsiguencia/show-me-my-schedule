var assignments = []
var scheduleArea = document.querySelector(".container")
var timeElement = document.querySelector("#currentDay")

var showTime = function(){
    var time = moment().format('MMMM Do YYYY, h:mm')
    timeElement.innerHTML = "<p>" + time + "</p>";
}
showTime()

var addCSS = function(block, blockTime){
    var time = moment()
    var roundedTime = time.startOf('hour')

    if (roundedTime.isAfter(blockTime)){
        $(block).addClass("past")
    } 
    
    if (roundedTime.isBefore(blockTime)){
        $(block).addClass("future") 
    }

    if (roundedTime.isSame(blockTime)){
        $(block).addClass("present") 
    }
}

var grabTimefromBlock = function(){
    var blockCounter = 0

    for (var i = 0; i < 9; i++){
        var block =""
        var block = document.querySelector(".col-8[block-hour='hour-" + blockCounter+ "']")
        var add9Hours = blockCounter + 9
        var blockTime = moment(add9Hours+":00", "h:mm")
        blockCounter++
        addCSS(block, blockTime)
    }
}
grabTimefromBlock()

setInterval(showTime, grabTimefromBlock ,10000)

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

    var task = {
            id: pickedBoxAreaId,
            textBox: taskText,
    }
    assignments.push(task)
    localStorage.setItem("tasks", JSON.stringify(assignments))
}
scheduleArea.addEventListener("click", saveTasks);