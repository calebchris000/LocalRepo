
const numbers={
  '1':1,
  '2':2,
  '3':3,
  '4':4,
  '5':5,
  '6':6,
  '7':7,
  '8':8,
  '9':9,
  '0':0,
  '+':'+',
  '-':'-',
  'x':'*',
  '÷':'/',
  'M':'%',
  '/':'/',
  '*':'*'
}
let item ='';
let docu = document.getElementById('input').innerHTML;

document.getElementById('output').innerHTML= docu

function getID(id){
  item += id
  document.getElementById('input').innerHTML = item
}

function refresh(){
  document.getElementById('input').innerHTML = 0
  document.getElementById('output').innerHTML = 0
  item = ''
}


function solve(){
  let splited = item.split('').map(x=>numbers[x]).join('')
    document.getElementById('output').innerHTML = eval(splited)
    item=eval(splited)
}


function del(){
  item = item.split('').slice(0,-1).join('')
  document.getElementById('input').innerHTML = item.length ==0? 0:item
}

function percent(){
  document.getElementById('input').innerHTML = eval(item/100)
  item/=100
}

function plusMinus(){
  let getNumber=item;
  let inp = document.getElementById('input')
  inp.innerHTML=inp.textContent >0 ? item.split('').unshift('-').join(''): item.split('').slice(1).join('')

}

document.addEventListener('keydown', function(event){

  if(event.keyCode >= 48 && event.keyCode <=57 || event.keyCode >=96 && event.keyCode<=111){
    item+=event.key
    document.getElementById('input').innerHTML =item
  }
  else if(event.keyCode == 8){
    del()
  }
  else if(event.keyCode ==13){
   solve()
  }
  
 
})





