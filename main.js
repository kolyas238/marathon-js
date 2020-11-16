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

/* Второе задание*/
let num = '+71234567890';

function formattedPhone(phone) {
  let acc = '';
  if (phone.length > 12) {
    return 'Слишком длинный номер'
  } else if (phone.length < 12) {
    return 'Слишком короткий номер'
  } else {
    for (var i = 0; i < phone.length; i++) {
      acc += phone[i];
      if (acc.length == 2) {
        acc += ' (';
      } else if (acc.length == 7) {
        acc += ') ';
      } else if (acc.length == 12) {
        acc += '-';
      } else if (acc.length == 15) {
        acc += '-';
      }
    };
  }
  return acc;
};

console.log(formattedPhone(num));
