const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img')

let index = 0

let interval = setInterval(run, 2000)

function run() {
  index++
  Imagechanger()
}

function Imagechanger() {
  if (index > img.length - 1) {
    index = 0
  } else if (index < 0) {
    index = img.length - 1
  }

  imgs.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

leftBtn.addEventListener('click', () => {
  index--
  Imagechanger()
  resetInterval()
})

rightBtn.addEventListener('click', () => {
  index++
  Imagechanger()
  resetInterval()
})
