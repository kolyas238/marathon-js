let firstRow = 'мама мыла раму';
let secondRow = 'собака друг человека';
let letter = prompt('введите букву, например', 'а');

function letterCounter(firstStr, secondStr) {
  let sum = 0;
  let num = 0;
  for (var i = 0; i <= firstStr.length; i++) {
    if (firstStr.charAt(i) === letter) {
      sum++;
    }
  }
  for (var j = 0; j <= secondStr.length; j++) {
    if (secondStr.charAt(j) === letter) {
      num++;
    }
  }
  if (sum > num) {
    return alert('в строке ' + firstRow + ' буква ' + letter + ' встречается большее количество раз');
  } else if (num > sum) {
    return alert('в строке ' + secondRow + ' буква ' + letter + ' встречается большее количество раз');
  } else {
    return alert('что-то пошло не так');
  }
}

console.log(letterCounter(firstRow, secondRow));
