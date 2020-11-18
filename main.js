const $btn = document.getElementById('btn-kick');
const $trickyBtn = document.getElementById('btn-kick-enemy');
const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
}

// $btn.addEventListener('click', function () {
//   console.log('Kick')
//   changeHP(random(20), character);
//   changeHP(random(20), enemy);
// });

function clickToButt(btn) {
  if (btn !== $trickyBtn) {
    btn.addEventListener('click', function () {
      console.log('Kick')
      changeHP(random(20), character);
      changeHP(random(20), enemy);
    });
  } else {
    btn.addEventListener('click', function () {
      console.log('Kick to enemy');
      changeHP(random(20), enemy);
    });
  }
}

clickToButt($btn);
clickToButt($trickyBtn);

function init() {
  console.log('Start Game!');
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert('Бедный ' + person.name + ' проиграл бой!');
    $btn.disabled = true;
    $trickyBtn.disabled = true;
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
