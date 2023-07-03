//let x=document.getElementById("header-title")
//console.log(x.textContent)
/*let y=document.getElementsByClassName("list-group-item")
y[2].style.backgroundColor="green"
for(let i=0;i<y.length;i++){
    y[i].style.fontWeight="bold"
}*/
let x=document.createElement("li")
let y=document.createTextNode("Item 5")
x.appendChild(y)
document.querySelector(".list-group").appendChild(x)
document.getElementsByTagName("li")[4].style.color="blue"
document.getElementsByTagName("li")[4].textContent="new item"