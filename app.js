
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


//It get the keynumbers from the onclick function on HTML and adds it to item
function getID(id) {
  item += id
  let sub = item.substring(0,11)
  document.getElementById('input').innerHTML = sub;
  item = sub

}

//Emulates the function of C, it clears the screen and set it all to zero
function refresh() {
  document.getElementById('input').innerHTML = 0
  document.getElementById('output').innerHTML = 0
  item = ''
}

//The equal function itself. Takes the input and evaluates it, then put the result to the output
function solve() {
  let splited = item.split('').map(x => numbers[x]).join('')
  let sub = eval(splited.substring(0,11))

  document.getElementById('output').innerHTML = Number.isInteger(sub)? sub: sub.toFixed(2)
  item = eval(sub)
}

//Emulates the delete key function. Deletes the last input
function del() {
  item = item.split('').slice(0, -1).join('')
  document.getElementById('input').innerHTML = item.length == 0 ? 0 : item
}

//The percentage function. Self explanatory
function percent() {
  document.getElementById('input').innerHTML = eval(item / 100)
  item /= 100
}

/*This function was implemented not too long ago.
I wanted to add an alternative for the user to use
the numeric numpad or the number key rows on their keyboards
to perform operations like similar calculators on the market*/

document.addEventListener('keydown', function (event) {
  if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 111) {
    item += event.key;
    let sub = item.substring(0,11)
    document.getElementById('input').innerHTML = sub
    item = sub
  }
  else if (event.keyCode == 8) {
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
    document.getElementById('input').innerHTML = item.substring(0,12)

  }
  else if (keycount < 1) {
    keycount = 0

  }
})






