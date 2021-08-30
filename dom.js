// get element
// const head = document.getElementById("head")

// console.log(head.textContent)
// dom
// const button = document.querySelector("button")
// const head = document.querySelector("#head")
// const container = document.querySelector(".container")
// button.innerHTML = "submit";
// head.innerHTML = "I am the heading"
// container.innerText="I am the div"
// Adding styles
// const button = document.querySelector("button")
// button.innerHTML = "submit";
// button.style.backgroundColor="blue"

// Event listeners
// const button = document.querySelector("button")
// button.innerHTML = "submit";

// function command() {
//     console.log("Welecome to intermediate javascript")
// }
// button.addEventListener("click", command)
// // or
// // button.addEventListener("click", ()=>{
// //     console.log("Welecome to intermediate javascript")
// // })
// Counter projects
// set timeout and interval
// let counter = 0
// console.log(counter); 
// // setTimeout(() => {
// //     counter++;
// //     console.log(counter);
// // }, 2000);
//  const x =setInterval(() => {
//     counter++;
//     console.log(counter);
//     if (counter > 5) {
//         clearInterval(x)
//     }
// }, 1000);

// or
// const button = document.querySelector("button")
// button.style.display = "none"
// setTimeout(() => {
//     button.style.display="block"
// }, 4000);
// navigate
// const menu = document.querySelector("section")
// const button = document.querySelector("button")
// const clickster = document.querySelector("clickster")
// clickster.style.cursor="pointer"
// menu.style.display = "none"
// let dropdown = false
// function philip(){
//     if (dropdown){
//        dropdown=false
//     }else{
//         dropdown = true
//     }
// }
// function togglemenu() {
//     if (dropdown) {
//         menu.style.display="block"
//     }else{
//         menu.style.display="none"
//     }
// }
// clickster.addEventListener("click", ()=>{
//     philip()
//     togglemenu()
// })

const menu = document.querySelector("section")
const clickster = document.querySelector("clickster")
clickster.style.cursor= "pointer"
menu.style.display = "block"
let philip = true
function philips() {
    if (philip) {
        philip= false
    }
    else{
        philip = true
    }
    
    }
    function ottu() {
        if (philip) {   menu.style.display="none"
             }else{
                 menu.style.display="block"
            }
    }
    clickster.addEventListener("click", ()=>{
        philips()
        ottu()
    })
