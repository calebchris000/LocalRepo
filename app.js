
const numbers = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '0': 0,
  '+': '+',
  '-': '-',
  'x': '*',
  '÷': '/',
  '.': '.',
  '/': '/',
  '*': '*'
}

let item = '';
let keycount = 0

document.getElementById('seven').addEventListener('click', function () {
  keycount++
})

function getID(id) {
  item += id
  document.getElementById('input').innerHTML = item

}

function refresh() {
  document.getElementById('input').innerHTML = 0
  document.getElementById('output').innerHTML = 0
  item = ''
  keycount = 0
}


function solve() {
  let splited = item.split('').map(x => numbers[x]).join('')
  document.getElementById('output').innerHTML = eval(splited)
  item = eval(splited)
}


function del() {
  item = item.split('').slice(0, -1).join('')
  document.getElementById('input').innerHTML = item.length == 0 ? 0 : item
}

function percent() {
  document.getElementById('input').innerHTML = eval(item / 100)
  item /= 100
}

function plusMinus() {
  let getNumber = item;
  let inp = document.getElementById('input')
  inp.innerHTML = inp.textContent > 0 ? item.split('').unshift('-').join('') : item.split('').slice(1).join('')

}


document.addEventListener('keydown', function (event) {
  if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 111) {
    keycount++

    item += event.key
    document.getElementById('input').innerHTML = item
  }
  else if (event.keyCode == 8) {

    keycount--
    del()
  }
  else if (event.keyCode == 67) {
    refresh()

  }
  else if (event.keyCode == 13) {
    solve()
  }
  document.getElementById('pee').innerHTML = keycount


  if (keycount >= 11) {
    item = item.split('').splice(0, 11).join('')
    let res = item.split('').splice(0, 11).join('')
    document.getElementById('input').innerHTML = res.length < 1 ? 0 : res
    keycount = 12

  }
  else if (keycount < 1) {
    keycount = 0

  }
})




