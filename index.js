function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
  let children = document.querySelector('div#grand-node').querySelectorAll('div')
  var child
  for (let i = 0; i < children.length; i++){
    child = children[i].innerHTML
    if(child.includes("div")){
      break;
    } else{
      return child
    }
  }
}
