const clouds = [...document.querySelectorAll('.header-cloud')]
const boat = document.querySelector('.header-boat')

window.addEventListener('scroll', () => {
    console.log(Math.floor(this.scrollY))

    clouds.forEach(cloud => {
        let speed = cloud.getAttribute('data-speed')
        cloud.style.transform = `translateX(${this.scrollY * speed}px)`

        let speedBoat = cloud.getAttribute('data-speed')
        boat.style.transform = `translateX(${this.scrollY * speedBoat}px)`
    })
})

// typing

const title = document.querySelector('.header-title')

const text = title.innerHTML
title.innerHTML = null

function str(x = 0) {
    title.innerHTML = title.innerHTML + text[x]
    x++
    if (x < text.length) {
        setTimeout(() => {
            str(x)
        }, 200);
    }
}
str()

const parallaxBox = document.querySelector('.parallax-content')
const parallaxBall = [...document.querySelectorAll('.parallax-ball')]

parallaxBox.addEventListener('mousemove', (event) => {
    console.log(window.innerWidth)
    console.log(event.pageX)

    parallaxBall.forEach(balls => {
        const x = (window.innerWidth - event.pageX) / 20
        const y = (window.innerHeight - event.pageY) / 20
        console.log(x)
        balls.style.transform = `translate(${x}px, ${y}px)`
    });
})

// Timer

const timer = document.querySelector('timer')
const timerCardNum = [...document.querySelectorAll('.timer-card__num')]

window.addEventListener('scroll', function scrollTimer() {
    if (this.scrollY >= timer.offsetTop - timer.offsetHeight) {
        timerStop()
        this.removeEventListener('scroll', scrollTimer)
    }
})

function timerStop() {
    for (let i = 0; i < timerCardNum.length; i++) {
        const count = timerCardNum[i].getAttribute('data-num');
        function calcCount(k = 0) {
            timerCardNum[i].innerHTML = k
            k++

            if (k <= count) {
                setTimeout(() => {
                    calcCount(k)
                }, 10)
            }
        }
        calcCount()
    }
}