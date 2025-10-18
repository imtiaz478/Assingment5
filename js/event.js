function job(id){
    alert("Board Updated Successfully");
    let taskASS = document.getElementById('task-ass').innerText;

    let ConvTaskAss = parseInt(taskASS);

    if(ConvTaskAss <= 0){
        return;
    }


    ConvTaskAss = ConvTaskAss-1;

    



    document.getElementById('task-ass').innerText = ConvTaskAss.toString();

    let taskCom = document.getElementById('task-comm').innerText;

    let ConvTaskCom = parseInt(taskCom);

    ConvTaskCom = ConvTaskCom +1;

    document.getElementById('task-comm').innerText = ConvTaskCom.toString();
    



}

let c = 0;

document.getElementById('btn-com-1').addEventListener('click' , function(event){
    event.preventDefault();
    job('btn-com-1');
    showHistory('task-1');
    this.disabled = true;
    this.classList.add("opacity-50");
    c = c+1;
    if(c == 6){
        alert("congrates!!! You have completed all the current task");
        c=0;
    }
});
document.getElementById('btn-com-2').addEventListener('click' , function(event){
    event.preventDefault();
    job('btn-com-1');
    showHistory('task-2');
    this.disabled = true;
    this.classList.add("opacity-50");
    c = c+1;
    if(c == 6){
        alert("congrates!!! You have completed all the current task");
        c=0;
    }
});
document.getElementById('btn-com-3').addEventListener('click' , function(event){
    event.preventDefault();
    job('btn-com-1');
    showHistory('task-3');
    this.disabled = true;
    this.classList.add("opacity-50");
    c = c+1;
    if(c == 6){
        alert("congrates!!! You have completed all the current task");
        c=0;
    }
});
document.getElementById('btn-com-4').addEventListener('click' , function(event){
    event.preventDefault();
    job('btn-com-1');
    showHistory('task-4');
    this.disabled = true;
    this.classList.add("opacity-50");
    c = c+1;
    if(c == 6){
        alert("congrates!!! You have completed all the current task");
        c=0;
    }
});
document.getElementById('btn-com-5').addEventListener('click' , function(event){
    event.preventDefault();
    job('btn-com-1');
    showHistory('task-5');
    this.disabled = true;
    this.classList.add("opacity-50");
    c = c+1;
    if(c == 6){
        alert("congrates!!! You have completed all the current task");
        c=0;
    }
});
document.getElementById('btn-com-6').addEventListener('click' , function(event){
    event.preventDefault();
    job('btn-com-1');
    showHistory('task-6');
    this.disabled = true;
    this.classList.add("opacity-50");
    c = c+1;
    if(c == 6){
        alert("congrates!!! You have completed all the current task");
        c=0;
    }
});

function showHistory(id){
    const task = document.getElementById(id).innerText;

    const e = document.createElement('div');

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;

    e.innerHTML = `
    <p>You have completed the task ${task} at ${currentTime}
    `;

   e.classList.add("bg-blue-100");
   e.classList.add("rounded");
   e.classList.add("p-2")

    const p = document.getElementById('history');

    p.appendChild(e);

};


document.getElementById('Clear').addEventListener('click' , function(event){
   
    event.preventDefault();
    const p = document.getElementById('history');
    p.innerHTML= '';


});

document.getElementById('new-tab').addEventListener('click' , function(){
    window.location.href = "main.html";
});

document.getElementById('btn-theme').addEventListener('click' , function(){
    const colors = [
        '#BFDBFE', 
        '#FDE68A', 
        '#FCA5A5', 
        '#BBF7D0', 
        '#E9D5FF', 
        '#FDBA74'  
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

});