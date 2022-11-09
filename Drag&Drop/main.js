const addBtn = document.getElementById("addBtn"); 
const inpTxt = document.getElementById("inpTxt"); 
const boxs = document.querySelectorAll(".box");


let drag = null



addBtn.onclick = function(){
    if(inpTxt.value !== ""){
       boxs[0].innerHTML += `<p class='item' draggable="true">${inpTxt.value}</p>` ;
       inpTxt.value ="";
    }
    dragItem();
}


function dragItem(){
    let  items = document.querySelectorAll(".item");

    console.log(items);
    items.forEach((item)=>{
        item.addEventListener("dragstart" , function (){
            drag = item;
            item.style.opacity = "0.6"
        })

        item.addEventListener("dragend" , function (){
            drag = null;
            item.style.opacity = "1"
        })

        boxs.forEach((box)=> {
            box.addEventListener("dragover" , function(e){
                e.preventDefault()
                this.style.backgroundColor = "red";
            })

            box.addEventListener("dragleave" , function(){
                this.style.backgroundColor = "#fff";
            })

            box.addEventListener("drop" , function(){
                box.append(drag);
                this.style.backgroundColor = "#fff";
            })
        })
    })
}


