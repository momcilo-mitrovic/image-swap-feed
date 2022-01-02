var slike = [
  'https://images.unsplash.com/photo-1640297013018-adaae8fd5536?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1640270219264-82bd8fb3c90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  'https://images.unsplash.com/photo-1638913662380-9799def8ffb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
]
var slikeelements = null
var container = null
var index = 0

var buttons = document.getElementsByClassName('button')
window.onload = function () {
  console.log('test')
  container = document.getElementById('imgs')
  slikeelements = new Array(slike.length)
  for (let i = 0; i < slike.length; i++) {
    slikeelements[i] = document.createElement('img')
    slikeelements[i].src = slike[i]
    container.appendChild(slikeelements[i])
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      index += buttons[i].id == 'left' ? -1 : 1
      if (index < 0) index = slike.length - 1
      container.style.transform = `translateX(${-index * 500}px)`
    }
  }
}
