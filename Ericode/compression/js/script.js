comp = function(str){
  let encoded_text = '';
  let i = 0;
  let j  = 0;
  while(i < str.length) {
    let count = 1;
    const char = str[i]
    j = i;
    while(j < str.length -1) {
      if (str[j] === str[j+1]){
        count++;
        j++;
      } else {
        break;
      }
    }
    encoded_text = `${encoded_text}${count}${char}`;
    i = j + 1;
  }
  return encoded_text;
}

const compComp = function (str) {
  if (str === '') {
    return '';
  } else {
    return str.match(/(.)\1*/g).map(c => `${c.length}${c[0]}`).join('');
  }
}

const str = 'aaaaabbbcccccccdefff'
console.log('Lange Version: ', comp(str));
console.log('Kurze Version: ', compComp(str));