// document.getElementById("firstName")
// document.getElementById("middleName")
// document.getElementById("lastName")
// document.getElementById("passWord")

// const form = document.getElementById("form-log");
let username = document.getElementById("userName");
let password = document.getElementById("passWord");
let signUsername = document.getElementById("sign-userName");
let signPassword = document.getElementById("sign-passWord");
let user = [];


function subMit(){
    let username = document.getElementById("userName");
    let password = document.getElementById("passWord");
    let book = {person: username.value,
        pass: password.value};
    user.push(book)
    // console.log(username.value)
    if(username.value > 7){
        alert("cannot exceed 7 letters");
    } else{
        alert("correct");
    }
    if (password.value < 8){
        alert("must exceed 8 letters");

    }else {
        alert("good");
    }
    localStorage.setItem("signup", JSON.stringify(user))
}

// let fem = document.getElementById("nock");

// fem.addEventListener("click", function fem(){
//     document.write("good morning")
// });

// if (username == "myusername" && password == "mypassword") {
//     alert("loggedin successfully");
//     console.log(username);
//     localStorage.setItem("login", true);
// } else{
//     alert("invalid username or password");
// }

// function signInSubmit(){
//     if ()
// }

// let formLog = document.getElementById("form-log");

// formLog.addEventListener("change", function(){
//     let username = document.getElementById("userName").value 
//     let firstname = document.getElementById("firstName").value
//     console.log(username)
//     console.log(firstname)

// })
// let knack = document.getElementById("niii");
// knack.addEventListener("click", setTimeout(mint, 5000){
    
// })
// knack.addEventListener("click", setTimeout(function mint(){
//     console.log("I am here")
// }, 3000))

// knack.addEventListener("click", setTimeout(mint, 3000))

// function mint() {
//     console.log("I am here");
// }

// knack.onclick = setTimeout(mint, 3000)
// window.setTimeout(Greeting, 5000);

// function Greeting(){
//     alert("fuck you!!!!!!!");
// }

// let mook = document.getElementById("break")

// function myFunc(){
    
// }



//  make a if statement, telling the sign up button to get the values in the username and password. 
// then write a setItem code in order to store the values in the localStorage
// then document.write the outcome of the values.
