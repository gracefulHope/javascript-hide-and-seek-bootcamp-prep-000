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
  const children = document.getElementById('grand-node').querySelectorAll('div')
  var child
  var i = 0
  while (i < children.length){
    child = children[i]
    if(child.innerHTML.includes("div")){
      i++
    }
    else{
      return child
    }
  }
}
