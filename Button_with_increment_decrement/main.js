let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let number = document.getElementById("number");

let a = 1;
increment.addEventListener("click" , function(){
    a++; 
    a = (a<10) ? "0" + a : a ;
    number.innerText = a 
    
})

decrement.addEventListener("click" , function(){
    if(a>=1){
        a--;  
        a = (a<10) ? "0" + a : a ;
        number.innerText = a 
    }
 
    
})