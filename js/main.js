let randomNum = Math.floor(Math.random()*10)+1;
let win = false;
let score = 20;

function checkNumber() {
  if (!win) {
  if(document.getElementById('typednum').value==randomNum)
  {
    document.getElementById('number').innerHTML = document.getElementById('typednum').value
    document.querySelector('body').style.backgroundColor='green';
    document.getElementById('hint').innerText = 'Congratulations!'
    win = true;
  }else if (document.getElementById('typednum').value>randomNum) {
    document.getElementById('hint').innerText = 'Hint: Typed number is too high!'
    score-=1;
    document.getElementById('right').innerText = 'Score: '+ score;
  }
  else if (document.getElementById('typednum').value<randomNum) {
    document.getElementById('hint').innerText = 'Hint: Typed number is too low!'
    score-=1;
    document.getElementById('right').innerText = 'Score: '+ score;
  }
}else {
  if (confirm('Wanna play again?')) {
    document.querySelector('body').style.backgroundColor='#303030';
    document.getElementById('number').innerText = '?';
    win = false;
    randomNum = Math.floor(Math.random()*10)+1;
    document.getElementById('hint').innerText = 'Hint';
  }
}

}
