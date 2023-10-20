var elForm = document.querySelector('.form')
var elInp = document.querySelector('.inp')
var elList = document.querySelector('.list')
var elImg = document.querySelector('.image')
var spn = document.querySelector('.spn')
var arr = []

elForm.addEventListener('submit', (e) => {
  e.preventDefault()
  arr.push(elInp.value, elImg.value)
  fnFor(arr)
})

function fnFor(arr) {
  elList.innerHTML =''
  for (let i = 0; i < arr.length; i+=2) {
    var newButton = document.createElement('button')
    var newBtn = document.createElement('button')
    var newImg = document.createElement('img')
    
    var newLi = document.createElement('li')
    var newS = document.createElement('span')
    newLi.classList.add('items')
    newButton.classList.add('button')
    newImg.setAttribute('src', arr[i+1])
    newBtn.classList.add('btn_b')
    newImg.classList.add('imgs')
    newS.classList.add('bold')
    newS.textContent = arr[i]
    newButton.textContent ='del'
    newBtn.textContent ='add'
    elList.appendChild(newLi)
    newLi.appendChild(newImg)
    newLi.appendChild(newS)
    newLi.appendChild(newButton)
    newLi.appendChild(newBtn)
  }
}