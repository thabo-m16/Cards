let age = document.getElementById("age")
let results = document.getElementById("results")
let arr= [age]
let isValid = false

/*results.textContent = name + ": "
function generate(){
    let ageGen = Math.floor(Math.random() * 100) + 1
    for(let i = ageGen; i < 3; i++){
        if(i === age){
            results.textContent += arr[ageNum] + " "
            isValid = true
        }else{
            results.textContent = "Try Again"
            isValid = false
        }
    }
}*/

let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    results.textContent = age.value 
})
