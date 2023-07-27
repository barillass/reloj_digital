//funcion flecha

const gethour = () =>{
    //sentencias/instrucciones
    const date = new Date(); //creacion de objeto Date
    // console.log(date.getHours())
    const time = {hora: date.getHours(), 
                  minuto: date.getMinutes(), 
                  segundo: date.getSeconds()
                }
    document.querySelector(".reloj").innerHTML = `${time.hora}:${time.minuto}:${time.segundo}`
}

setInterval(gethour,1000)


//animacion
function modificarDesc() {
  let desc = document.querySelector("#desc");
  setTimeout(()=>{
      desc.textContent = "Reloj Digital";
  } , 0)
  setTimeout(() => {
      desc.textContent = "By Mónica Barillas";
  }, 3000)
  setTimeout(() => {
      desc.textContent = ":)";
  }, 6000)
}

modificarDesc()
setInterval(modificarDesc, 9000)