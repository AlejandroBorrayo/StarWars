let Sonar;
let Frames = 0 ;
let Enemigos = []
let Enemigos2 = []
let Enemigos3 = []
let Naves = ["Imagenes/naveMaligna3-removebg-preview.png","Imagenes/naveMaligna2-removebg-preview.png"]
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

const AudioNAve = new Audio()
AudioNAve.src="../Musica/sonidoNave.wav"
AudioNAve.loop = true
AudioNAve.play()
const MusicaPrincipal = ()=>{
  const Principal = new Audio()
  Principal.src ="../Musica/StarWars.wav"
  Principal.loop = true
  Principal.play()
      }
const ReproducirSonidoPrincipal = ()=>{
  Sonar = setTimeout(MusicaPrincipal,12500)
}

ReproducirSonidoPrincipal()
const Canvas = document.querySelector("#canvas")
      const context = Canvas.getContext("2d")
      const Clear = ()=>{
        context.clearRect(0,0,1330,630 )
      }

      const Impactos=()=>{

      
        Enemigos.forEach((enemigo,index_enemigo)=>{
          Balas.forEach((bala,index_bala)=>{
            if(bala.collision(enemigo)){
              Enemigos.splice(index_enemigo,1)
              Balas.pop()
              Liquidados+=1
            }
          }) 
    
        })
        Enemigos2.forEach((enemigo,index_enemigo)=>{
  
          Balas.forEach((bala,index_bala)=>{

            if(bala.collision(enemigo)){
              Enemigos2.splice(index_enemigo,1)
              Balas.pop()
              Liquidados+=1
            } 
          }) 
    
        })
        Enemigos3.forEach((enemigo,index_enemigo)=>{
  
          Balas.forEach((bala,index_bala)=>{

            if(bala.collision(enemigo)){
              Enemigos3.splice(index_enemigo,1)
              Balas.pop()
              Liquidados+=1
            } 
          }) 
    
        })
        
      }


    const Motor = ()=>{   
      const ImprimirLiquidados = document.querySelector("h1")
      ImprimirLiquidados.textContent = Liquidados  
      Clear()
      Balas.forEach(bala=>{
      bala.DrawCarrito()
      bala.Disparo()
      HalconMilenario.NewPosition()

    })

    Impactos()
    HalconMilenario.DrawCarrito()
    Enemies()
    Enemies2()
    Enemies3()
  }

  
    setInterval(Motor,15)

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

     if(Frames % 80 === 0){

     }
    if(Frames % 200 === 0){
      let xMax = 1330
      let yMax = 630
      let xRandom = Math.floor(Math.random()*xMax)
      let NaveAleatoria = Math.floor(Math.random()*Naves.length)

      Enemigos.push(new Construccion (100,100,xRandom,-5,Naves[NaveAleatoria]))
      
    }
    Enemigos3.forEach((enemigo,index)=>{
      if(enemigo.y > 650 ){
       Enemigos3.splice(index, 1)
      }
    })
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
      if(Frames % 80 === 0){
        let xMax = 1330
        let yMax = 630
        let xRandom = Math.floor(Math.random()*xMax)
        let NaveAleatoria = Math.floor(Math.random()*Naves.length)
  
        Enemigos2.push(new Construccion (100,100,xRandom,-5,Naves[NaveAleatoria]))
        
      }
      Enemigos3.forEach((enemigo,index)=>{
        if(enemigo.y > 650 ){
         Enemigos3.splice(index, 1)
        }
      })
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
     if(Frames % 150 === 0){
       console.log("Es divisible entre 100")
       let xMax = 1330
       let yMax = 630
       let xRandom = Math.floor(Math.random()*xMax)
       let NaveAleatoria = Math.floor(Math.random()*Naves.length)
 
       Enemigos3.push(new Construccion (100,100,xRandom,-5,Naves[NaveAleatoria]))
     }
     Enemigos3.forEach((enemigo,index)=>{
       if(enemigo.y > 650 ){
        Enemigos3.splice(index, 1)
       }
     })
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
    Disparo(){
      this.y -= 8
    }

    collision(item){

      return (
          this.x < item.x + item.width &&
          this.x+ this.width > item.x &&
          this.y < item.y + item.height &&
          this.y + this.height > item.y
      )
  }
  }
 
  const Calabera = new Construccion (100,100,3,3,"Imagenes/Calabera-removebg-preview.png")
  Calabera.DrawCarrito()
  

  
  const HalconMilenario = new Construccion(100,100,225,500,"Imagenes/milenario-removebg-preview.png")
  HalconMilenario.DrawCarrito()
  document.addEventListener("mousemove",(e)=>{

    HalconMilenario.x = e.clientX - 72
    HalconMilenario.y = e.clientY - 60
  })
  
  document.addEventListener("keydown",(evento)=>{
    Balas.push( new Construccion (3,40,HalconMilenario.x+47,HalconMilenario.y,"Imagenes/Luz.png"))
    let Disparo = new Audio()
    Disparo.src = "../Musica/Disparo.wav"
    Disparo.play()
 
    
    switch(evento.key) {
        case "ArrowLeft":
            HalconMilenario.velocidadX =-6
            break
        case "ArrowRight":
            HalconMilenario.velocidadX =+6
            break
        case "ArrowUp":
            HalconMilenario.velocidadY =-6
            break
        case "ArrowDown":
            HalconMilenario.velocidadY =+6
            break
        default: 
            break
    }
  })
  document.addEventListener("keyup",(e)=>{
    HalconMilenario.velocidadX = 0
    HalconMilenario.velocidadY = 0
  })

    
  
     
  
  