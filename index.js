//  let g = document.getElementById("cent").value
function removeAll(){
    document.getElementById("cent").value = "";

}

function num(value) {
    document.getElementById("cent").value += value;
}

function answer() {
    var ni = document.getElementById("cent").value;
    var mike = eval(ni);
    document.getElementById("cent").value = mike;
}

// function mine() {
//    let milk = document.getElementById("cent")
//    milk.value = mike.pop();
// //    let mike = milk.value;
//    innerHTML = milk; 
//    console.log(milk);
// //    let mike = eval(milk)
// //    console.log(milk)
//     // document.getElementById("cent").value = mike;
// }
function greet(){
    // localStorage
    console.log("welcome Back!!!!");                 
}

function conSol(send) {
    // let n = Date();
    console.log(send);
}
conSol("my date");