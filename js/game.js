const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth - 30;
canvas.height = innerHeight - 30;
canvas.style.position = 'center';



const parsedCollisions = collisionsLevel1.parse2D()

const collisionBlocks = parsedCollisions.createObjectsFrom2D()


const background = new Sprite({
    position: {
    x:0,
    y:0,
    }, 

imageSrc: "./img/map.png"

})
const player = new Player({
    collisionBlocks, 
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc: './img/king/idle.png'
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc: './img/king/idleLeft.png'
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 8,
            loop: true,
            imageSrc: './img/king/runRight.png'
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 8,
            loop: true,
            imageSrc: './img/king/runLeft.png'
        }
    }
})

const coin = new Sprite({position: {
    x: canvas.width/2,
    y: canvas.height/2
},
imageSrc: './img/coinRotate.png',
frameRate: 6,

}) 

const keys ={
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    d:{
        pressed: false
    }
}
function animate(){
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'Black'
    ctx.fillRect(0,0,canvas.width, canvas.height)

    player.velocity.x = 0
    if (keys.d.pressed) {
        player.switchSprite('runRight')
        this.lastdirection = 'right'
        player.velocity.x = 4
    }
    else if (keys.a.pressed) {
        player.switchSprite('runLeft')
        this.lastdirection = 'left'
        player.velocity.x = -4
    }
    else{
        if(this.lastdirection == 'left'){
            player.switchSprite('idleLeft')
        }
        else{
            player.switchSprite('idleRight')
        }
    }

    background.draw()
    // coin.draw()
    collisionBlocks.forEach(collisionBlock =>{
        collisionBlock.draw()
    })

    player.draw()
    player.update()
}
animate()

