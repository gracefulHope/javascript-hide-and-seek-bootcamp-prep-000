function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  
 for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
}
