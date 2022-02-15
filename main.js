let Header = document.getElementById('Header');
let task = document.getElementById("ToDoTask");
var task2 = document.getElementById("addtoList");
var task3 = document.getElementById("deletetolist");
var task4 = document.getElementById("inputfield");
var newelement = document.getElementById("mylist");
var tasklist = [] 

    function addtoList(){
        console.log("task",task );
        var task5 = task4.value
        if(task5.length==0){
            alert("you forget to add your work");
        }else{
            tasklist.push(task5);

        for(i = 0;i<tasklist.length;i++){

            var li = document.createElement("li");
            li.appendChild(document.createTextNode(tasklist[i]));
            newelement.appendChild(li);
            console.log(li);
        }
    
        console.log(tasklist);
    }
   // console.log(tasklist);
    
    function deletetoList(){
        tasklist.pop[task5];
    }

var mylist = document.querySelector('ul');
mylist.addEventListener('click',function(meet){
    if(meet.target.tagName === 'mylist'){
    } 
    meet.target.classlist.toggle("checkbox").checked;   
},false)

// SetInterval is use to Complete the Task by the Time

setInterval(Anim, 9000);

function Anim(){
    alert("Complete Your Todays Task");
};
    }
    
