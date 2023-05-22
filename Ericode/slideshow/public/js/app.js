const random = document.querySelectorAll('.rand');
const previous = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');

const mirrorH = document.querySelectorAll('.mirror-h');
const mirrorV = document.querySelectorAll('.mirror-v');
// const numPics = document.querySelectorAll('.numPics');

let allPics;

$.ajax({
  'async': false,
  'type': "POST",
  'global': false,
  'dataType': 'html',
  'url': "ajax/getAllPics.php",
  'data': {'request': "", 'target': 'arrange_url', 'method': 'method_target'},
  'success': function (data) {
    allPics = JSON.parse(data);
  }
});


const getRandom = () => {
  return Math.round(Math.random() * allPics.length)
}

let i = [];
for (let j = 0; j < next.length; j++) {
  i.push(getRandom())
}

console.log(i)

next.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (i[index] < allPics.length) {
      i[index]++
    } else {
      i[index] = 0;
    }
    $("#image" + index).attr('src', allPics[i[index]])
    console.log(i)
  })
})

previous.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (i[index] > 0) {
      i[index]--
    } else {
      i[index] = allPics.length;
    }
    $("#image" + index).attr('src', allPics[i[index]])
    console.log(i)
  })
})

random.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    i[index] = getRandom()
    $("#image" + index).attr('src', allPics[i[index]])
    console.log(i)
  })
})

mirrorH.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    $('#image' + index).toggleClass('flippedX')
  })
})

mirrorV.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    $('#image' + index).toggleClass('flippedY')
  })
})

