const $btn = document.getElementById('btn-kick');
const $trickyBtn = document.getElementById('btn-kick-enemy');
const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
}

// $btn.addEventListener('click', function () {
//   console.log('Kick')
//   changeHP(random(20), character);
//   changeHP(random(20), enemy);
// });
let clickCounter = function(){
  let $btns = document.querySelectorAll('.button');
  let acc = 8;
  $btns.forEach((btn) => {
    let btnText = btn.textContent;
    btn.addEventListener('click', function() {
      acc--;
      if (!acc) {
        $btns.forEach(function(item) {
          item.disabled = true;
        })
      }
      btn.textContent = (`Нажата ${btnText}, осталось нажатий ${acc}`);
    })
  })
};

clickCounter();

function clickToButt(btn) {
  if (btn !== $trickyBtn) {
    btn.addEventListener('click', function () {
      console.log('Kick')
      character.changeHP(random(20));
      enemy.changeHP(random(20));
    });
  } else {
    btn.addEventListener('click', function () {
      console.log('Kick to enemy');
      enemy.changeHP(random(20));
    });
  }
}

clickToButt($btn);
clickToButt($trickyBtn);

function init() {
  console.log('Start Game!');
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife(person) {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP(person) {
  this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count, person) {
  this.damageHP -= count;
  const log = this === enemy ? generateLogs(this, character, -count) : generateLogs(this, enemy, -count);
  getLog(log);

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл бой!');
    $btn.disabled = true;
    $trickyBtn.disabled = true;
  };

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function generateLogs(firstPerson, secondPerson, count) {
  const logs = [
      `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
      `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
      `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
      `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
      `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
      `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
      `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
      `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
      `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
      `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
  ];

  return logs[random(logs.length) - 1]
}

function getLog(log) {
  let $logs = document.querySelector('.logs');
  let element = document.createElement('div');
  element.innerText = log;
  element.style.background = 'linear-gradient(to right, rgba(12, 134, 170,.8), rgba(137, 11, 221,.8))';
  element.style.width = '50%';
  element.style.color = '#fff';
  element.style.borderRadius = '15px';
  element.style.margin = '0 auto 15px';
  element.style.padding = '15px';
  $logs.insertBefore(element, $logs.children[0]);
}


init();
