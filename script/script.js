/* Click Btns */
let redBtn = document.getElementById('red')
let yellowBtn = document.getElementById('yellow')
let greenBtn = document.getElementById('green')
let autoBtn = document.getElementById('automatic')
let offBtn = document.getElementById('off')
let trafficLight = document.getElementById('traffic')

/*Red Light*/
redBtn.addEventListener('click', function(){
  trafficLight.src = 'img/red.png'
})

/*Yellow Light*/
yellowBtn.addEventListener('click', function(){
  trafficLight.src = 'img/yellow.png'
})

/*Green Light*/
greenBtn.addEventListener('click', function(){
  trafficLight.src = 'img/green.png'
})

/*Off button*/
offBtn.addEventListener('click', function(){
    trafficLight.src = 'img/off.png'
    clearInterval(lightInterval)
})

/*AutoBtn Light*/

let arr = ['img/red.png', 'img/yellow.png', 'img/green.png']

let count = 0

function counter(){
    trafficLight.src = arr[count]
    if(count >= 2){
        count = 0   
    }else{
        count++
    }
}

autoBtn.addEventListener('click', function(){
    lightInterval = setInterval(() => {
        counter()
    }, 1500);
})
 