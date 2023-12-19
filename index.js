// Write your code below:
const fruitList = document.getElementsByTagName('li');
fruitList[4].style.color = 'blue';
let n = fruitList.length;
for(let i=0; i<n; i++){
  fruitList[i].style.fontStyle = 'italic';
}