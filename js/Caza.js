let Sonar;
let Nivel2;
let Nivel3;
let EstaEnNivel3 = false
let Iniciar;
let EstaEnNivel2 = false
let SuperPoder = false
let EstaEnemigoFinal = false
let DispararAmigos ;
let DispararAmigos2 ;
let cambio = 4;

  
const Nivel1 =()=>{
  const level1 = document.createElement("img")
  level1.src = "/Imagenes/Nivel1Prueba-removebg-preview.png"
  level1.classList.add("level1")
  document.body.appendChild(level1)
  const EliminarNivel1 = ()=>{
    level1.remove()
  }
  setTimeout(EliminarNivel1,3500)
}
let Frames = 0 ;
let Enemigos = []
let Enemigos2 = []
let Enemigos3 = []
let EnemigoUltimoNivel = []
let vidaUltimoEnemigo = 50
let DisparosEnemigoUltimoNivel = []
let Naves = ["Imagenes/naveMaligna3-removebg-preview.png","Imagenes/naveMaligna2-removebg-preview.png","Imagenes/ghostJuego.png","Imagenes/naveMaligna1-removebg-preview.png"]
let NuevaPosicionX1;
let NuevaPosicionY1;
let NuevaPosicionX2;
let NuevaPosicionY2;
let NuevaPosicionX3;
let NuevaPosicionY3;
let Balas = []
let Liquidados = 0
let balasEnemigos1=[]
let balasEnemigos2=[]
let balasEnemigos3=[]
let NaveAyuda1 =[]
let NaveAyuda2 =[]
let BalasNaveAyuda1 = []
let BalasNaveAyuda2 = []
let NaveAyuda1Vuelta2 =[]
let NaveAyuda2Vuelta2 =[]
let BalasNaveAyuda1Vuelta2 = []
let BalasNaveAyuda2Vuelta2 = []
let ModoDeJuego;
let ayuda
const AudioYouDontKnow = new Audio()
AudioYouDontKnow.src ="/Musica/PODER.wav"
const MusicaImperio = new Audio()
MusicaImperio.src ="/Musica/MarchaImperial.wav"
const MusicaGame = new Audio()
MusicaGame.src="/Musica/StarWars.wav"


// const ModoDeJuegoTeclado = document.querySelector(".Teclado")
// const ModoDeJuegoMouse = document.querySelector(".Mouse")
document.addEventListener("click",(e)=>{

  if(e.target.classList.contains("Teclado")){
    const BorrarModoTeclado = document.querySelector(".Teclado")
    const BorrarModoMOuse = document.querySelector(".Mouse")
    const Texto = document.querySelector("h2")
    BorrarModoTeclado.remove()
    BorrarModoMOuse.remove()
    Texto.remove()
    ModoDeJuego = "Teclado"
    MostrarInstrucciones()
    setTimeout(BorrarInstrucciones,8000)
    setTimeout(EmpiezaElJuego,9000)

  } else if(e.target.classList.contains("Mouse")){
    const BorrarModoTeclado = document.querySelector(".Teclado")
    const BorrarModoMOuse = document.querySelector(".Mouse")
    const Texto = document.querySelector("h2")
    BorrarModoTeclado.remove()
    BorrarModoMOuse.remove()
    Texto.remove()

    ModoDeJuego = "Mouse"
    MostrarInstrucciones()
    setTimeout(Nivel1,8100)
    setTimeout(BorrarInstrucciones,8000)
    
    setTimeout(EmpiezaElJuego,12000)
    
  }
})




const MostrarInstrucciones=()=>{
    AudioYouDontKnow.play()
    const Instrucciones = document.createElement("img")
  Instrucciones.src="/Imagenes/Instrucciones-removebg-preview.png"
  Instrucciones.classList.add("Instrucciones")
  document.body.appendChild(Instrucciones)
}
const BorrarInstrucciones=()=>{
  const Borrar = document.querySelector(".Instrucciones")
  Borrar.remove()
}


const EmpiezaElJuego=()=>{


  MusicaImperio.play()
  //setTimeout(MusicaMarchaImperial, 1000)
  const canvas = document.querySelector(".canvas")
  canvas.classList.remove()
  canvas.classList.add("canvasJugar")
     
  const CambioPosicionX1 =()=>{
    const PosiblesPosicionesX1 = [2,4,6,-2,-3,-1, 0, 0,0]
    const PosiblesPosicionesY1 = [0,2,,7,-1,4,0,4,8]
    const PosicionElegidaX1 = Math.floor(Math.random()*PosiblesPosicionesX1.length)
    const PosicionElegidaY1 = Math.floor(Math.random()*PosiblesPosicionesY1.length)
    NuevaPosicionX1 = PosiblesPosicionesX1[PosicionElegidaX1] 
    NuevaPosicionY1 = PosiblesPosicionesY1[PosicionElegidaY1] 
  }
  const CambioPosicionX2 =()=>{
    const PosiblesPosicionesX2 = [1,2,-2,-6,1,0,0]
    const PosiblesPosicionesY2 = [0,2,1,7,4,0,4,8,3]
    const PosicionElegidaX2 = Math.floor(Math.random()*PosiblesPosicionesX2.length)
    const PosicionElegidaY2 = Math.floor(Math.random()*PosiblesPosicionesY2.length)
    NuevaPosicionX2 = PosiblesPosicionesX2[PosicionElegidaX2] 
    NuevaPosicionY2 = PosiblesPosicionesY2[PosicionElegidaY2] 
  }
  const CambioPosicionX3 =()=>{
    const PosiblesPosicionesX3 = [3,5,-2,4,-5,4]
    const PosiblesPosicionesY3 = [0,2,1,7,4,0,4,8,3]
    const PosicionElegidaX3 = Math.floor(Math.random()*PosiblesPosicionesX3.length)
    const PosicionElegidaY3 = Math.floor(Math.random()*PosiblesPosicionesY3.length)
    NuevaPosicionX3 = PosiblesPosicionesX3[PosicionElegidaX3] 
    NuevaPosicionY3 = PosiblesPosicionesY3[PosicionElegidaY3] 
  }
  setInterval(CambioPosicionX3, 1000)
  setInterval(CambioPosicionX2, 1000)
  setInterval(CambioPosicionX1, 1000)
  

  const Canvas = document.querySelector("#canvas")
        const context = Canvas.getContext("2d")
        const Clear = ()=>{
          context.clearRect(0,0,1330,630 )
        }

        const GameOver =()=>{
          clearInterval(Nivel3)
          clearInterval(Iniciar)
          clearInterval(Nivel2)
          Canvas.remove()
          AudioNAve.pause()
          const Perdiste = new Audio()
          Perdiste.src = "/Musica/Iam.wav"
          MusicaImperio.pause()
          Perdiste.play()

          const ImgPerdiste = document.createElement("img")
            ImgPerdiste.src = "/Imagenes/GameOver.png" 
            ImgPerdiste.classList.add("perdiste")
            document.body.appendChild(ImgPerdiste)
          const Muerto = ()=>{
            
            const Score = document.createElement("h1")
            Score.textContent = `Destruiste ${Liquidados} Naves`
            Score.classList.add("Score")
            document.body.appendChild(Score)
            const divJugarDenuevo = document.createElement("div")
            const btnJugarDenuevo = document.createElement("button")
            divJugarDenuevo.classList.add("divJugarDenuevo")
            btnJugarDenuevo.classList.add("btnGameOver")
            btnJugarDenuevo.textContent = "JUGAR DENUEVO"
            divJugarDenuevo.appendChild(btnJugarDenuevo)
            document.body.appendChild(divJugarDenuevo)
            const divIraMenu = document.createElement("div")
            const btnMenu = document.createElement("button")
            divIraMenu.classList.add("divIraMenu")
            btnMenu.classList.add("btnGameOver")
            btnMenu.textContent = "MENÚ PRINCIPAL"
            divIraMenu.appendChild(btnMenu)
            document.body.appendChild(divIraMenu)
  
            btnJugarDenuevo.addEventListener("click",()=>{
              window.location.reload()
            })
            divIraMenu.addEventListener("click",()=>{
              window.location.href ="/index.html"
            })
          }
          setTimeout(Muerto,3500)


          
          
        }

      
      const AudioNAve = new Audio()
      AudioNAve.src="../Musica/sonidoNave.wav"
      AudioNAve.loop = true
      AudioNAve.play()



  
        const Impactos=()=>{

          DisparosEnemigoUltimoNivel.forEach((balaEnemigo,index_balaEnemigo)=>{
            if(HalconMilenario.collision(balaEnemigo)){
              GameOver()
            }
          })

          EnemigoUltimoNivel.forEach((enemigo,index_enemigo)=>{
            Balas.forEach((bala,index_bala)=>{
              if(bala.collision(enemigo)){
                Liquidados +=1
              }
            })
          })

        


          balasEnemigos1.forEach((balaEnemigo,index_balaEnemigo)=>{
            if(HalconMilenario.collision(balaEnemigo)){
              GameOver()
            }
          })
          balasEnemigos2.forEach((balaEnemigo,index_balaEnemigo)=>{
            if(HalconMilenario.collision(balaEnemigo)){
              GameOver()

            }
          })
          balasEnemigos3.forEach((balaEnemigo,index_balaEnemigo)=>{
            if(HalconMilenario.collision(balaEnemigo)){
              GameOver()

            }
          })


  
          Enemigos.forEach((enemigo,index_enemigo)=>{
            if(enemigo.y > 600 ){
              Enemigos.splice(index_enemigo, 1)
             }
             if( HalconMilenario.collision(enemigo) ){
              GameOver()
            }
            Balas.forEach((bala,index_bala)=>{
              if(bala.collision(enemigo)){
                Enemigos.splice(index_enemigo,1)
                Balas.pop()
                Liquidados+=1
              }
            }) 

            BalasNaveAyuda1.forEach((bala,index_BalaAyuda1)=>{
              if(bala.collision(enemigo)){
                Enemigos.splice(index_enemigo,1)
                BalasNaveAyuda1.pop()
                Liquidados+=1
              }
            })
            BalasNaveAyuda2.forEach((bala,index_BalaAyuda2)=>{
              if(bala.collision(enemigo)){
                Enemigos.splice(index_enemigo,1)
                BalasNaveAyuda2.pop()
                Liquidados+=1
              }
            })
            BalasNaveAyuda1Vuelta2.forEach((bala,index_BalaAyuda1)=>{
              if(bala.collision(enemigo)){
                Enemigos.splice(index_enemigo,1)
                BalasNaveAyuda1Vuelta2.pop()
                Liquidados+=1
              }
            })
            BalasNaveAyuda2Vuelta2.forEach((bala,index_BalaAyuda2)=>{
              if(bala.collision(enemigo)){
                Enemigos.splice(index_enemigo,1)
                BalasNaveAyuda2Vuelta2.pop()
                Liquidados+=1
              }
            })
      
          })
          Enemigos2.forEach((enemigo,index_enemigo)=>{
            if(enemigo.y > 600 ){
              Enemigos2.splice(index_enemigo, 1)
             }
             if( HalconMilenario.collision(enemigo) ){
              GameOver()
            }
            Balas.forEach((bala,index_bala)=>{
  
              if(bala.collision(enemigo)){
                Enemigos2.splice(index_enemigo,1)
                Balas.pop()
                Liquidados+=1
              } 
            }) 
            BalasNaveAyuda1.forEach((bala,index_BalaAyuda1)=>{
              if(bala.collision(enemigo)){
                Enemigos2.splice(index_enemigo,1)
                BalasNaveAyuda1.pop()
                Liquidados+=1
              }
            })
            BalasNaveAyuda2.forEach((bala,index_BalaAyuda2)=>{
              if(bala.collision(enemigo)){
                Enemigos2.splice(index_enemigo,1)
                BalasNaveAyuda2.pop()
                Liquidados+=1
              }
            })
            BalasNaveAyuda1Vuelta2.forEach((bala,index_BalaAyuda1)=>{
              if(bala.collision(enemigo)){
                Enemigos2.splice(index_enemigo,1)
                BalasNaveAyuda1Vuelta2.pop()
                Liquidados+=1
              }
            })
            BalasNaveAyuda2Vuelta2.forEach((bala,index_BalaAyuda2)=>{
              if(bala.collision(enemigo)){
                Enemigos2.splice(index_enemigo,1)
                BalasNaveAyuda2Vuelta2.pop()
                Liquidados+=1
              }
            })
      
          })
          Enemigos3.forEach((enemigo,index_enemigo)=>{
            if(enemigo.y > 600 ){
              Enemigos3.splice(index_enemigo, 1)
             }
             if( HalconMilenario.collision(enemigo) ){
              GameOver()
            }
            Balas.forEach((bala,index_bala)=>{
  
              if(bala.collision(enemigo)){
                Enemigos3.splice(index_enemigo,1)
                Balas.pop()
                Liquidados+=1
              } 
            }) 
            BalasNaveAyuda1.forEach((bala,index_BalaAyuda1)=>{
              if(bala.collision(enemigo)){
                Enemigos3.splice(index_enemigo,1)
                BalasNaveAyuda1.pop()
                Liquidados+=1
              }
            })
            BalasNaveAyuda2.forEach((bala,index_BalaAyuda2)=>{
              if(bala.collision(enemigo)){
                Enemigos3.splice(index_enemigo,1)
                BalasNaveAyuda2.pop()
                Liquidados+=1
              }
            })
            BalasNaveAyuda1Vuelta2.forEach((bala,index_BalaAyuda1)=>{
              if(bala.collision(enemigo)){
                Enemigos3.splice(index_enemigo,1)
                BalasNaveAyuda1.pop()
                Liquidados+=1
              }
            })
            BalasNaveAyuda2Vuelta2.forEach((bala,index_BalaAyuda2)=>{
              if(bala.collision(enemigo)){
                Enemigos3.splice(index_enemigo,1)
                BalasNaveAyuda2Vuelta2.pop()
                Liquidados+=1
              }
            })
      
          })
          
        }
        const DisparoEnemigoFinal=()=>{
          if(EnemigoUltimoNivel.length>0 && Frames % 70 === 0){
            EnemigoUltimoNivel.forEach(Enemigo=>{
              DisparosEnemigoUltimoNivel.push(new Construccion (3,40,Enemigo.x+20,Enemigo.y+180,"Imagenes/BalaEnemigo.png"))
              DisparosEnemigoUltimoNivel.push(new Construccion (3,40,Enemigo.x+238,Enemigo.y+180,"Imagenes/BalaEnemigo.png"))
          })
          
          }
        }
  
  
      const Motor = ()=>{   

        const ImprimirLiquidados = document.querySelector("h1")
        ImprimirLiquidados.textContent = Liquidados  
        Clear()
        Niveles()
        Poder()
        Poder2()
        EnemigoFinal()
        DisparoEnemigoFinal()

        if(EnemigoUltimoNivel.length>0){
          EnemigoUltimoNivel.forEach(enemigo=>{
            enemigo.DrawCarrito()

          })
          
        }
        if(DisparosEnemigoUltimoNivel.length){
          DisparosEnemigoUltimoNivel.forEach(bala=>{
            bala.DrawCarrito()
            bala.DisparoUltimoEnemigo()
          })
        }
 

        BalasNaveAyuda1.forEach(bala=>{
          bala.DrawCarrito()
          bala.DisparoAyuda1()
        })

        Balas.forEach(bala=>{
        bala.DrawCarrito()
        bala.Disparo()
      })
      balasEnemigos1.forEach(bala=>{
        bala.DrawCarrito()
        bala.DisparoEnemigo()
      })
      balasEnemigos2.forEach(bala=>{
        bala.DrawCarrito()
        bala.DisparoEnemigo()
      })
      balasEnemigos3.forEach(bala=>{
        bala.DrawCarrito()
        bala.DisparoEnemigo()
      })
      Impactos()
      HalconMilenario.NewPosition()
      HalconMilenario.DrawCarrito()
      Enemies()
      Enemies2()
      Enemies3()
  
  
    }

   
      Iniciar =  setInterval(Motor,15)

      const EmpezarNivel2=()=>{
        AudioNAve.pause()
        MusicaImperio.pause()
        const ImagenLevel2 = document.createElement("img")
        ImagenLevel2.src="/Imagenes/Nivel2.pngPrueba-removebg-preview.png"
        ImagenLevel2.classList.add("level2")
        document.body.appendChild(ImagenLevel2)
        const EliminarImagenNivel2 =()=>{
          ImagenLevel2.remove()
        }
        setTimeout(EliminarImagenNivel2,5200)
        if(!EstaEnNivel2){
          console.log("Iniciado")
          const Level2 = ()=>{
            Nivel2 = setInterval(Motor,15)
            AudioNAve.play()
            MusicaImperio.play()

          }
          setTimeout(Level2,6000)
          EstaEnNivel2 = true
        }
      }
      const EmpezarNivel3 = ()=>{
        if(!EstaEnNivel3){
          AudioNAve.pause()
          MusicaImperio.pause()
          const ImagenLevel3 = document.createElement("img")
          ImagenLevel3.src="/Imagenes/nivel3-removebg-preview (1).png"
          ImagenLevel3.classList.add("level2")
          document.body.appendChild(ImagenLevel3)
          const EliminarImagenNivel3 =()=>{
            ImagenLevel3.remove()
          }
          setTimeout(EliminarImagenNivel3,5200)
          if(!EstaEnNivel3){
            console.log("Iniciado")
            const Level3 = ()=>{
              Nivel3 = setInterval(Motor,15)
              AudioNAve.play()
              MusicaImperio.play()
  
            }
            setTimeout(Level3,6000)
            EstaEnNivel3 = true
          }
        }
      }
      const Niveles=()=>{
        if(Liquidados>9 && !EstaEnNivel2){
          clearInterval(Iniciar)
          Enemigos = []
          Enemigos2 = []
          Enemigos3 = []
          Balas = []
          balasEnemigos1=[]
          balasEnemigos2=[]
          balasEnemigos3=[]
          HalconMilenario.x = 600
          HalconMilenario.y = 500

          EmpezarNivel2()
        }

        if(Liquidados>19 && !EstaEnNivel3){
          clearInterval(Nivel2)
          Enemigos = []
          Enemigos2 = []
          Enemigos3 = []
          Balas = []
          balasEnemigos1=[]
          balasEnemigos2=[]
          balasEnemigos3=[]
          HalconMilenario.x = 600
          HalconMilenario.y = 500
          EmpezarNivel3()
        }

      }


      const Poder = ()=>{
        
        if(Frames === 400){
          NaveAyuda1.push(new Construccion(100,100,0,0,"Imagenes/milenarioAyuda.png"))
          NaveAyuda2.push(new Construccion(100,100,1220,540,"Imagenes/interceptorAyuda.png"))    
        }
                
        if(NaveAyuda1.length>0 && NaveAyuda2.length>0){
          
          NaveAyuda1.forEach(nave=>{
            if( nave.y>600){
              NaveAyuda1.pop()
            }
            nave.DrawCarrito()
            nave.MovimientoAyuda1()
            BalasNaveAyuda1.forEach(bala=>{
              bala.DrawCarrito()
              bala.DisparoAyuda1()
            })   
          })
          NaveAyuda2.forEach(nave=>{
            if( nave.y<0 ){
              NaveAyuda2.pop()
            }
            nave.DrawCarrito()
            nave.MovimientoAyuda2()
            BalasNaveAyuda2.forEach(bala=>{
              bala.DrawCarrito()
              bala.DisparoAyuda2()
            })      
          })
        } else {
          DisparoAyuda1 = []
          DisparoAyuda2 = []
        }
      }
      const Poder2 = ()=>{
        
        if(Frames === 1500){
          NaveAyuda1Vuelta2.push(new Construccion(100,100,0,540,"Imagenes/CazaAyuda.png"))
          NaveAyuda2Vuelta2.push(new Construccion(100,100,1220,0,"Imagenes/interceptorAyuda.png"))    
        }
                
        if(NaveAyuda1Vuelta2.length>0 && NaveAyuda2Vuelta2.length>0){
          
          NaveAyuda1Vuelta2.forEach(nave=>{
            if( nave.y>600){
              NaveAyuda1Vuelta2.pop()
            }
            nave.DrawCarrito()
            nave.MovimientoAyuda2()
            BalasNaveAyuda1Vuelta2.forEach(bala=>{
              bala.DrawCarrito()
              bala.DisparoAyuda1()
            })   
          })
          NaveAyuda2Vuelta2.forEach(nave=>{
            if( nave.y<0 ){
              NaveAyuda2Vuelta2.pop()
            }
            nave.DrawCarrito()
            nave.MovimientoAyuda1()
            BalasNaveAyuda2Vuelta2.forEach(bala=>{
              bala.DrawCarrito()
              bala.DisparoAyuda2()
            })      
          })
        } else {
          DisparoAyuda1Vuelta1 = []
          DisparoAyuda2Vuelta2 = []
        }
        if (Frames ===1680){
         clearInterval(DispararAmigos2)
        }
      
      }



       const Enemies =  ()=>{
         Frames +=1

         for(i = 0;i< Enemigos.length;i++ ){
           if(Enemigos[i].x >=1230 ){
            NuevaPosicionX1 = -10
            Enemigos[i].x += NuevaPosicionX1
            Enemigos[i].y += NuevaPosicionY1
  
           } else if(Enemigos[i].y === -5){
            Enemigos[i].y += NuevaPosicionY1
            NuevaPosicionY1 = +3
            Enemigos[i].x += NuevaPosicionX1
  
           }  else if(Enemigos[i].x <=0){
            NuevaPosicionX = +3 
            Enemigos[i].x += NuevaPosicionX1
            Enemigos[i].y += NuevaPosicionY1
  
           } else{
            Enemigos[i].x += NuevaPosicionX1
            Enemigos[i].y += NuevaPosicionY1
            Enemigos[i].DrawCarrito()
           }
       }
       if(Frames % 50 === 0){
         Enemigos.forEach((Enemigo,index_Enemigo)=>{
          balasEnemigos1.push(new Construccion (3,40,Enemigo.x+47,Enemigo.y,"Imagenes/BalaEnemigo.png"))
  
         })
       }
       if(Frames % 70 === 0){
        Enemigos2.forEach((Enemigo,index_Enemigo)=>{
         balasEnemigos2.push(new Construccion (3,40,Enemigo.x+47,Enemigo.y,"Imagenes/BalaEnemigo.png"))
  
        })
      }
      if(Frames % 135  === 0){
        Enemigos3.forEach((Enemigo,index_Enemigo)=>{
         balasEnemigos3.push(new Construccion (3,40,Enemigo.x+47,Enemigo.y,"Imagenes/BalaEnemigo.png"))
  
        })
      }

 
      if(Frames % 200 === 0 && Liquidados <20){
        let xMax = 1330
        let yMax = 630
        let xRandom = Math.floor(Math.random()*xMax)
        let NaveAleatoria = Math.floor(Math.random()*Naves.length)
  
        Enemigos.push(new Construccion (100,100,xRandom,0,Naves[NaveAleatoria]))
        
      }
      
       }
       const Enemies2 =  ()=>{
  
           for(i = 0;i< Enemigos2.length;i++ ){
             if(Enemigos2[i].x >=1230 ){
              NuevaPosicionX2 = -10
              Enemigos2[i].x += NuevaPosicionX2
              Enemigos2[i].y += NuevaPosicionY2
    
             } else if(Enemigos2[i].y === -5){
              Enemigos2[i].y += NuevaPosicionY2
              NuevaPosicionY2 = +3
              Enemigos2[i].x += NuevaPosicionX2
    
             }  else if(Enemigos2[i].x <=3){
              NuevaPosicionX2 = +3 
              Enemigos2[i].x += NuevaPosicionX2
              Enemigos2[i].y += NuevaPosicionY2
    
             } else{
              Enemigos2[i].x += NuevaPosicionX2
              Enemigos2[i].y += NuevaPosicionY2
              Enemigos2[i].DrawCarrito()
             }
    
    
         }
         console.log(Frames)
         if(Liquidados > 10 && Liquidados <20 ){
           
          if(Frames % 80 === 0){
            let xMax = 1330
            let yMax = 630
            let xRandom = Math.floor(Math.random()*xMax)
            console.log(xRandom)
            let NaveAleatoria = Math.floor(Math.random()*Naves.length)
      
            Enemigos2.push(new Construccion (100,100,xRandom,0,Naves[NaveAleatoria]))
            
          }
        }
        
  
         }
         const Enemies3 =  ()=>{

          for(i = 0;i< Enemigos3.length;i++ ){
            if(Enemigos3[i].x >=1230 ){
             NuevaPosicionX3 = -10
             Enemigos3[i].x += NuevaPosicionX3
             Enemigos3[i].y += NuevaPosicionY3
   
            } else if(Enemigos3[i].y === -5){
             Enemigos3[i].y += NuevaPosicionY3
             NuevaPosicionY3 = +3
             Enemigos3[i].x += NuevaPosicionX3
   
            }  else if(Enemigos3[i].x <=0){
             NuevaPosicionX3 = +3 
             Enemigos3[i].x += NuevaPosicionX3
             Enemigos3[i].y += NuevaPosicionY3
   
            } else{
             Enemigos3[i].x += NuevaPosicionX3
             Enemigos3[i].y += NuevaPosicionY3
             Enemigos3[i].DrawCarrito()
            }
   
   
        }
       if(Frames % 150 === 0 && Liquidados<20){
         console.log("Es divisible entre 100")
         let xMax = 1330
         let yMax = 630
         let xRandom = Math.floor(Math.random()*xMax)
         let NaveAleatoria = Math.floor(Math.random()*Naves.length)
   
         Enemigos3.push(new Construccion (100,100,xRandom,0,Naves[NaveAleatoria]))
       }
  
        }

        const EnemigoFinal=()=>{
          if(Liquidados>=20 && !EstaEnemigoFinal){
            NuevoEnemigoFinal()
          }

          if(Liquidados>50){
            Ganaste()

          }
        }
        
        const Ganaste = ()=>{
          clearInterval(Nivel3)
          Canvas.remove()

          AudioNAve.pause()
          MusicaGame.play()
          console.log("hola")
          const ImagenGanaste =  document.createElement("img")
          ImagenGanaste.src = "/Imagenes/Ganaste-removebg-preview.png"
          ImagenGanaste.classList.add("Ganaste")
          document.body.appendChild(ImagenGanaste)
          const IraMenu =()=>{
            window.location.href ="/index.html"
          }
          setTimeout(IraMenu, 20000)   
        }

    class Construccion{
      constructor(width,height,x,y, url){
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.velocidadX = 0
        this.velocidadY = 0
        this.imgen = new Image()
        this.imgen.src = url
      }
    
      DrawCarrito(){
        const ctx = context
        ctx.drawImage(this.imgen, this.x, this.y, this.width, this.height)
      }
  
      NewPosition(){
          this.x +=this.velocidadX
          this.y +=this.velocidadY
      }
      MovimientoAyuda1(){
        this.y += 2
      }
      MovimientoAyuda2(){
        this.y -= 2
      }
      DisparoAyuda1(){
        this.x +=8
      }
      DisparoAyuda2(){
        this.x +=-8
      }
      Disparo(){
        this.y -= 8
      }
      DisparoEnemigo(){
        this.y += 8
      }
      DisparoUltimoEnemigo(){
        this.y += 7
      }
  
      collision(item){
  
        return (
            this.x < item.x + (item.width) &&
            this.x+ this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }

    }
   
    const Calabera = new Construccion (100,100,3,3,"Imagenes/Calabera-removebg-preview.png")
    Calabera.DrawCarrito()
    
  
    
    const HalconMilenario = new Construccion(100,100,225,500,"/Imagenes/casaEstelarJuego-removebg-preview.png")
    HalconMilenario.DrawCarrito()

    const NuevoEnemigoFinal=() =>{
       EnemigoUltimoNivel.push(new Construccion(250,250,225,0,"Imagenes/naveMaligna1-removebg-preview.png"))
       EnemigoUltimoNivel.forEach(enemigo=>{
        enemigo.DrawCarrito()
       })
      EstaEnemigoFinal = true 
    }

    


    if(ModoDeJuego === "Teclado" ){
      document.addEventListener("keydown",(evento)=>{
        if(evento.code === "Space"){
          Balas.push( new Construccion (3,40,HalconMilenario.x+47,HalconMilenario.y,"Imagenes/Luz.png"))
          let Disparo = new Audio()
          Disparo.src = "../Musica/Disparo.wav"
          Disparo.play()
        }

     
        
        switch(evento.key) {
            case "ArrowLeft":
                HalconMilenario.velocidadX =-13
                break
            case "ArrowRight":
                HalconMilenario.velocidadX =+13
                break
            case "ArrowUp":
                HalconMilenario.velocidadY =-13
                break
            case "ArrowDown":
                HalconMilenario.velocidadY =+13
                break
            default: 
                break
        }
  
      })
      document.addEventListener("keyup",(e)=>{
        HalconMilenario.velocidadX = 0
        HalconMilenario.velocidadY = 0
      })
  
      
    } else {
      document.addEventListener("click",(e)=>{
        e.preventDefault()
        Balas.push( new Construccion (3,40,HalconMilenario.x+47,HalconMilenario.y,"Imagenes/Luz.png"))
        let Disparo = new Audio()
        Disparo.src = "../Musica/Disparo.wav"
        Disparo.play()
      })
      document.addEventListener("mousemove",(e)=>{
    
        HalconMilenario.x = e.clientX - 72
        HalconMilenario.y = e.clientY - 60
      })
    }

    console.log(ModoDeJuego)

    const Disparar=()=>{
      if(NaveAyuda1.length>0){
        NaveAyuda1.forEach(nave=>{
          BalasNaveAyuda1.push(new Construccion(40,3,nave.x+93,nave.y+48,"Imagenes/LuzAyuda.png"))
          })
      }
      if(NaveAyuda2.length>0){
        NaveAyuda2.forEach(nave=>{
          BalasNaveAyuda2.push(new Construccion(40,3,nave.x-17,nave.y+52,"Imagenes/LuzAyuda.png"))
          })
      }
    }
    const Disparar2=()=>{
      if(NaveAyuda1Vuelta2.length>0){
        NaveAyuda1Vuelta2.forEach(nave=>{
          BalasNaveAyuda1Vuelta2.push(new Construccion(40,3,nave.x+93,nave.y+48,"Imagenes/LuzAyuda.png"))
          })
      }
      if(NaveAyuda2Vuelta2.length>0){
        NaveAyuda2Vuelta2.forEach(nave=>{
          BalasNaveAyuda2Vuelta2.push(new Construccion(40,3,nave.x-17,nave.y+52,"Imagenes/LuzAyuda.png"))
          })
      }
    }
    
     DispararAmigos = setInterval(Disparar,200) 
     const RemoverDispararAmigos=()=>{
      clearInterval(DispararAmigos)
     }
    setTimeout(RemoverDispararAmigos,9050)

    DispararAmigos2 =  setInterval(Disparar2,200)
    

}



