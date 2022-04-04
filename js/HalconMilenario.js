let Sonar;
let Frames = 0 ;
let Enemigos = []
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
    const Motor = ()=>{
    HalconMilenario.NewPosition()
    Clear()
    HalconMilenario.DrawCarrito()
    Enemies()
  }
  
    setInterval(Motor,20)

     const Enemies =  ()=>{
    //   for(i = 0;i< Enemigos.length;i++ ){
    //     Enemigos[i].x
    //   } 
    Frames +=1
    if(Frames % 150 === 0){
      console.log("Es divisible entre 300")
    }
     }
  
  class Construccion{
    constructor(width,height,x,y){
      this.width = width
      this.height = height
      this.x = x
      this.y = y
      this.velocidadX = 0
      this.velocidadY = 0
      this.imgen = new Image()
      this.imgen.src = "https://i.ibb.co/9pL9y39/milenario-removebg-preview.png"
    }
  
    DrawCarrito(){
      const ctx = context
      ctx.drawImage(this.imgen, this.x, this.y, this.width, this.height)
    }
    NewPosition(){
        this.x +=this.velocidadX
        this.y +=this.velocidadY
    }
  }
  
  const HalconMilenario = new Construccion(100,100,225,500)
  HalconMilenario.DrawCarrito()
  
  document.addEventListener("keydown",(evento)=>{
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
    
  
     
  
  