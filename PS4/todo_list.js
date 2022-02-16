const inputTime = document.querySelector('#duetime_input');
const inputDate = document.querySelector('#duedate_input');
const inputDescription = document.querySelector('#task_description_input');
const listNode = document.querySelector("#task_list");

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

function addTask (description, dueTime = false){
    let li = document.createElement('li');
    

    if (dueTime != false){
        
        const convertDate = new Date(dueTime).toLocaleString('en-US')
        li.innerHTML = description + '<span class="due"> due ' + convertDate + '</span><button class="btn btn-sm btn-outline-danger done" type="button">Done</button>';
        listNode.appendChild(li);
    }
    else{
        li = document.createElement('li');
        li.innerHTML = description + '<button class="btn btn-sm btn-outline-danger done" type="button">Done</button>';
        listNode.appendChild(li);
    }

    li.querySelector(".done").addEventListener("click", function(){
        li.remove();
    });
}
addTask('SI 579 Exam',1645477200)
addTask('wash hands')

document.querySelector("#add_task").addEventListener("click", function(){
    let finalDate = dateAndTimeToTimestamp(inputDate,inputTime);
    addTask(inputDescription.value, finalDate);

    inputTime.value = '';
    inputDate.value = '';
    inputDescription.value = '';

});

document.querySelector('html').addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        document.querySelector("#add_task").click();
        console.log('yes');
    }  
});



