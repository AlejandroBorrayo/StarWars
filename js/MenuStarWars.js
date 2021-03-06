let NaveParaJugar;
const sonidoR2d2 = new Image()
const audio = new Audio();
audio.src = "../Musica/StarWars.wav";
audio.loop = true


    const Musica = ()=>{

        audio.play()
    }
    
       let Time = setTimeout(Musica, 12500)
       
    

document.addEventListener("keydown",(e)=>{
    if (e.code === "Enter"){
        const QuitarOmitir = document.querySelector(".enter")
        QuitarOmitir.remove()
        clearTimeout(Time)
        if(audio.play()){
            return 
        } else{
            audio.play()
        }
    }
})
let Boton = document.querySelector(".Jugar")
document.addEventListener("keydown",(e)=>{
    console.log(e.key)
    if(e.key==="Enter"){
        const Historia = document.querySelector(".historia")
        Historia.remove()
        const haceTiempo = document.querySelector(".haceTiempo")
        haceTiempo.remove()
        const logo = document.querySelector(".seleccionarlogo")
        logo.classList.remove("logo")
        logo.classList.add("LogoInicioJuego")
        const theGAme = document.querySelector(".theGame")
        theGAme.classList.remove("ocultar")
        Boton.textContent = "JUGAR"
        Boton.classList.remove("ocultar")
        Boton.classList.add("Jugar") 
    }
})

document.body.addEventListener("click",(e)=>{
    if(e.target.classList.contains("Jugar")){
        const Boton = document.querySelector(".Jugar")
        Boton.remove()
        const TheGame = document.querySelector(".theGame")
        TheGame.classList.add("ocultar")
        const SeleccionaNave = document.querySelector(".selecciona")
        SeleccionaNave.classList.remove("ocultar")
        const CazaEstelar = document.querySelector("#cazaEstelar")
        CazaEstelar.classList.remove("ocultar")
        CazaEstelar.classList.add("cazaEstelar")
        const LlegadaNave = new Audio()
        LlegadaNave.src="../Musica/naveLlegando.mp3"
        LlegadaNave.play()

        const ReproducirLlegadaDeNave =()=>{
            const LlegadaNave = new Audio()
            LlegadaNave.src="../Musica/naveLlegando.mp3"
            LlegadaNave.play()
        }
        const RepetirSonidoNave = ()=>{
            let SonidoLlegandoNave = setTimeout(ReproducirLlegadaDeNave,1500)
            let SonidoLlegandoNave3 = setTimeout(ReproducirLlegadaDeNave,3000)
        }
        RepetirSonidoNave()


        const Alcon = document.querySelector("#Milenario")
        Alcon.classList.remove("ocultar")
        Alcon.classList.add("halcon")


        const Interceptor = document.querySelector("#Interceptor")
        Interceptor.classList.remove("ocultar")
        Interceptor.classList.add("Interceptor")



    }
})

document.body.addEventListener("click",(e)=>{
    if(e.target.id === "cazaEstelar"){
        const BorrarTodo = document.querySelector(".Inicio")
        BorrarTodo.remove()      
        ElegisteTuNave("cazaEstelar")
    } else if(e.target.id === "Milenario"){
        const BorrarTodo = document.querySelector(".Inicio")
        BorrarTodo.remove() 
        ElegisteTuNave("Milenario")
    } else if(e.target.id === "Interceptor"){
        const BorrarTodo = document.querySelector(".Inicio")
        BorrarTodo.remove() 
        ElegisteTuNave("Interceptor")

    }

})

const ElegisteTuNave=(nave)=>{
    
    const NaveElegida = document.createElement("img")
    const NaveElegidaTexto = document.createElement("img")
    if(nave === "cazaEstelar"){
        NaveElegidaTexto.src = "../Imagenes/ElegisteCaza-removebg-preview.png"
        NaveElegidaTexto.classList.add("NaveElegidaTexto")
        document.body.appendChild(NaveElegidaTexto)
        NaveElegida.src="../Imagenes/cazaEstelar.png"
        NaveElegida.classList.add("NaveElegida")
        document.body.appendChild(NaveElegida)
        NaveParaJugar = "cazaEstelar"
    } else if(nave === "Milenario"){
        NaveElegidaTexto.src = "../Imagenes/ElegisteHalcon-removebg-preview.png"
        NaveElegidaTexto.classList.add("NaveElegidaTexto")
        document.body.appendChild(NaveElegidaTexto)
        NaveElegida.src="../Imagenes/AlconMilenario-removebg-preview.png"
        NaveElegida.classList.add("NaveElegida")
        document.body.appendChild(NaveElegida)
        NaveParaJugar = "Milenario"
    } else if(nave === "Interceptor"){
        NaveElegidaTexto.src = "../Imagenes//ElegisteRZ-1-removebg-preview.png"
        NaveElegidaTexto.classList.add("NaveElegidaTexto")
        document.body.appendChild(NaveElegidaTexto)
        NaveElegida.src="../Imagenes/interceptorSeleccion-removebg-preview.png"
        NaveElegida.classList.add("NaveElegida")
        document.body.appendChild(NaveElegida)
        NaveParaJugar = "Interceptor"
        
        
    }
    let Time = setTimeout(BorrarTodo,3000)
    
    

}
const BorrarTodo = ()=>{
    const NaveElegidaTexto = document.querySelector(".NaveElegidaTexto")
    const NaveElegida = document.querySelector(".NaveElegida")
    NaveElegidaTexto.remove()
    NaveElegida.remove()
    Start()
    
}

const Start = ()=>{
    if(NaveParaJugar === "cazaEstelar"){
    window.location.href ="../Caza.html"
    } else if(NaveParaJugar === "Milenario"){
        window.location.href ="../HalconMilenario.html"
    } else if(NaveParaJugar === "Interceptor") {
        window.location.href ="../Interceptor.html"
    }

}

document.addEventListener("click",()=>{
    const sonidoR2d2 = new Audio()
    sonidoR2d2.src = "../Musica/sonidodelArturo.wav"
    sonidoR2d2.play()
})