// const table = document.getElementById('table');
// const tableHead = document.getElementById('tableHead');
// const tableRow = document.getElementById('tableRow');
//
// const th = tableHead.content;
// const tr = tableRow.content;
//
// const copyth = document.importNode(th, true);
// const copytr = document.importNode(tr, true);
//
// table.append(copyth, copytr);
const app = document.getElementById('app');

const appTemp = document.getElementById('sample').content;

const copy = document.importNode(appTemp, true);

const title = copy.querySelector('.title');
const desc = copy.querySelector('.desc');
const cat = copy.querySelector('.category');
const date = copy.querySelector('.date');
const topic = copy.querySelector('.topic');

title.innerHTML = 'Uiuiuiuiuiuiii!';
desc.innerHTML = 'Samson aus der Sesamstrasse wundert sich doch sehr.';
cat.innerHTML = 'KinderTV';
date.innerHTML = '20.05.2023';
topic.innerHTML = 'Seltsamkeiten';

app.appendChild(copy);