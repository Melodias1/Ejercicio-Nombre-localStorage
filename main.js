let txtName= document.getElementById("name");

let btnAgregar = document.getElementById("btnAgregar")

let placeName= document.getElementById("placeName")

let localName =



btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
        if(txtName.value.length<3){
            
        }
        localStorage.setItem("nombre", txtName.value)
})

window.addEventListener("load", function(event){
    if(this.localStorage.getItem("nombre")!=null){
        alertMesaje.innerHTML=`hola, ${this.localStorage.getItem("nombre")}`
    }
    
    let now = new Date()
    fecha . innerText=(new Date().getMonth+1)+"/" +now.getFullYear()
})


