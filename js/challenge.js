//pseudocode
//the number should be always increment when domloads upto a set timeout.
//the minus sign should decrement the count
//the plus sign should increment the count
//the love icon once clicked should display a message with the count of how many times the diaplyed number is clicked.
//pause should stop the count
//submit should display the comment on the dom

let a = 0
let num =  document.querySelector("h1#counter").innerHTML

let interval = setInterval(function(){
    num = a
    a++
    document.querySelector("h1#counter").innerHTML = a
  
   
}, 1000)

document.querySelector("button#minus").addEventListener("click",function(){
    document.querySelector("h1#counter").innerHTML -= 1 
} )


document.querySelector("button#plus").addEventListener("click", function(){
    let string = document.querySelector("h1#counter").innerHTML 
    str = Number.parseInt(string) + 1 
    document.querySelector("h1#counter").innerHTML = str
    
     
})

let click = false
document.querySelector("button#pause").addEventListener("click", function(e){
   
    click = !click
   
    if(click === true){
       
    clearInterval(interval)}

    else {
        setInterval(function(){
            num = a
            a++
            document.querySelector("h1#counter").innerHTML = a
          
           
        }, 1000)
        click = true;

    }
})


let counter =  0
document.querySelector("button#heart").addEventListener("click", function(){
    counter++


    let newer = document.createElement("li");
    let child = document.querySelector(".likes").innerText =
        `${num} has been liked ${counter} time`
   
    
    newer.append(child)
   
})


document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()
    let comment = document.querySelector("input#comment-input").value

    document.querySelector("#list.comments").innerText = comment
    document.querySelector("form").reset()
   
})