let buttonSearch = document.querySelector("button")
let imagen= document.querySelector("img")


function cargarCiudad(){
    let input=document.querySelector("input")
    let ciudad=input.value
    if( ciudad === " "|| ciudad == null || ciudad === ""){
        alert("debe ingresar el nombre de una ciudad.")
        return      
     }
     $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
        document.querySelector(".container").style.visibility = "visible"
       document.querySelector("#ciudad").textContent = data.name
       document.querySelector("#temperatura").innerHTML= Math.round(data.main.temp) + "<sup>°C</sup>"
        let imagenLink= data.weather[0].icon
        imagen.setAttribute("src", "http://openweathermap.org/img/w/"+imagenLink+".png")
       document.querySelector("#descripcion").textContent= data.weather[0].description
       document.querySelector("input").value = "" 
}) 
.fail(function() {
  alert("Ciudad no encontrada.");
})
      
   }
buttonSearch.addEventListener("click", cargarCiudad)
   
            
document.addEventListener("keydown", function(a){
   if (a.keyCode === 13) {
       cargarCiudad()
     }
})



   
    

