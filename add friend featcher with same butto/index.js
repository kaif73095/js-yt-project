var istatus = document.querySelector("h5");

var btn = document.querySelector("#add");
var chech = 0
// var removeFriend = document.querySelector("#remove")

btn.addEventListener("click",function(){
    if(chech == 0){
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    console.log("hui hi ")
    btn.innerHTML = 'remove'
    btn.style.backgroundColor = "black"
    chech = 1
    }else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = 'Add Friend'
         btn.style.backgroundColor = "#0095f6"
        
    
    chech = 0
    }
    
})

