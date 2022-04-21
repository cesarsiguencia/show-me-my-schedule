var assignments = []
var scheduleArea = document.querySelector(".container")
var timeElement = document.querySelector("#currentDay")

var showTime = function(){
    var time = moment().format('MMMM Do YYYY, h:mm')
    timeElement.innerHTML = "<p>" + time + "</p>";
}
showTime()
setInterval(showTime ,10000)

var addCSS = function(block, blockTime){

    if (moment().isAfter(blockTime)){
        $(block).addClass("warning")

    } else if (moment().isBefore(blockTime)){
        $(block).addClass("future") 
    } 
    else {
        console.log("NOOOOOO", blockTime)
    }
}

var grabTimefromBlock = function(){

    var blockCounter = 1

    for (var i = 1; i < 10; i++){
        var block =""
        var block = document.querySelector(".col-8[block-hour='hour-" + blockCounter+ "']")
        var add8Hours = blockCounter + 8
        var blockTime = moment(add8Hours+":00", "h:mm")
        blockCounter++
        addCSS(block, blockTime)
    }
 }

grabTimefromBlock()

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