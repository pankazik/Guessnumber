let randomNum = Math.floor(Math.random()*10)+1;
let win = false;
let score = 20;
const malin = document.getElementsByClassName('hidden')[0];
const answernumber = document.getElementById('answernumber');
const hint = document.getElementById('hint');
const typednum = document.getElementById('typednum');
const scorenum = document.getElementById('scorenum');
const main = document.querySelector('.main');
const colorbg = document.querySelector('.colorbg');
const body = document.querySelector('body');

colorbg.addEventListener('change',function(){
  body.style.backgroundColor = colorbg.value;
})


function checkNumber() {
  if (!win) {
  if(typednum.value==randomNum)
  {
    answernumber.innerHTML = typednum.value
    body.style.backgroundColor='green';
    hint.innerText = 'Congratulations!'
    win = true;
  }
  else {
    hint.innerText = typednum.value>randomNum?'Hint: Typed number is too high!':'Hint: Typed number is too low!';
    score-=1;
    document.getElementById('scorenum').innerText = 'Score: '+ score;
  }
}
else {
  if (confirm('Wanna play again?')) {
    body.style.backgroundColor = colorbg.value;
    answernumber.innerText = '?';
    win = false;
    randomNum = Math.floor(Math.random()*10)+1;
    hint.innerText = 'Hint';
    score=20;
    document.getElementById('scorenum').innerText = 'Score: '+score;
  }}}

  document.getElementById('settings').addEventListener('click',showMalin)

function showMalin(){
  if (malin.classList.contains('hidden')) {
  malin.classList.remove('hidden');
  main.classList.add('blur');
}}

function hideMalin(){
  if (!malin.classList.contains('hidden')) {
    malin.classList.add('hidden');
    main.classList.remove('blur');
  }
}



  document.addEventListener('keyup', function(e){
    if (e.keyCode == 27)
    hideMalin();
  })
