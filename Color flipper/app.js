const btn = document.getElementById("btn")
const color = document.getElementById("color")
const wrap = document.getElementById("wrap")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//btn.addEventListener('click',changeBg)----you can give like this or 

btn.addEventListener('click',
function changeBg(){
    let hexColor="#"
    for(let i=1;i<=6;i++){
        hexColor+=randomHexValue()
    }
    wrap.style.backgroundColor=hexColor
    color.innerHTML=hexColor
   //console.log(hexColor)
})

function randomHexValue(){
     let index = Math.floor(Math.random()*16)
     return hex[index]
}
