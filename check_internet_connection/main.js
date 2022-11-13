const title = document.querySelector(".title"); 
const reload = document.querySelector(".reload");
const ul = document.querySelector("ul");



window.addEventListener("load" , ()=>{

        if(window.navigator.onLine){
            online(); 
        }else{
            offline();
        }


})



window.addEventListener("online" , online )
window.addEventListener("offline" , offline )








function online(){
    title.innerHTML = "Online Now";
    title.style.color = "green"; 
    ul.classList.add("hide")
    reload.classList.add("hide")
    
}

function offline(){
    title.innerHTML = "Offline Now";
    title.style.color = "#666"
    ul.classList.remove("hide")
    reload.classList.remove("hide")

}
