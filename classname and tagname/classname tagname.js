//USING CLASSNAME
let listgroup = document.getElementsByClassName('list-group-item')
console.log(listgroup)
listgroup[1].style.backgroundColor = 'green'

for(var i=0; i<listgroup.length; i++) {
    listgroup[i].style.fontWeight = 'bold'
}

for(var i=0; i<listgroup.length; i++) {
    listgroup[i].style.backgroundColor = 'grey'
}

//USING TAGNAME

let li = document.getElementsByTagName('li')
console.log(li)
li[1].style.backgroundColor = 'green'

for(var i=0; i<li.length; i++) {
    li[i].style.fontWeight = 'bold'
}

for(var i=0; i<li.length; i++) {
    li[i].style.backgroundColor = 'grey'
}