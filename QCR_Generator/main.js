const container = document.querySelector(".container") , 
    input = container.querySelector(".container input")
    btn = container.querySelector(".container button") , 
    img = container.querySelector(".code img")


btn.addEventListener("click" , ()=>{
    let qrValue = input.value
    if(!qrValue) return;
    btn.innerText = "Generating Qr Code....✅"
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    img.addEventListener("load" , ()=>{
        container.classList.add("active");
        btn.innerText = "Generate Qr Code"
    })
})

input.addEventListener("keyup" , ()=>{
    if(!input.value){
        container.classList.remove("active");
    }
})