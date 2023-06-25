




// function subMit(){
//     let user = document.getElementById("userName").value;
//     let password = document.getElementById("pass").value;

//     if (user.length > 6 ){
//         alert("username successful")
        
//     }else if(user.length < 5){
//         alert("must exceed 6 letters");
//     }
//     else{
//         alert("username unavailable");
//     }

//     if (password.length > 7){
//         alert("password correct")
//     }else if(password.length < 5){
//         alert("missing")
//     }
//     else(
//         alert("wrong password")
//     )

// }


let counting = document.getElementById("countD");
let hours = 01;
let minutes = 03;
let seconds = 05;
let num1 = 10;
let count; 
const start = () => {
    count = setInterval(() =>{
        num1 -= 1
        let outputSecs = num1;
        let outputMins = minutes;
        let outputHour = hours;
        if(num1 < 10){
            outputSecs = `0${num1}`
        }
        if(minutes < 10){
            outputMins = `0${minutes}`
        }
        if(hours < 10 ){
            outputHour = `0${hours}`
        }
        if (num1 == 0){
            minutes -= 1;
            num1 = seconds
        }
        if(minutes = 0){
            hours -= 1
        }
        counting.innerHTML = `${outputHour} : ${outputMins} : ${outputSecs}`;
    }, 1000)
 
}

function stop(){
    clearInterval(count)
}

