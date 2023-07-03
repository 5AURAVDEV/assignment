//let x=document.getElementById("header-title")
//console.log(x.textContent)
/*let y=document.getElementsByClassName("list-group-item")
y[2].style.backgroundColor="green"
for(let i=0;i<y.length;i++){
    y[i].style.fontWeight="bold"
}*/


/*
let x=document.createElement("li")
let y=document.createTextNode("Item 5")
x.appendChild(y)
document.querySelector(".list-group").appendChild(x)
document.getElementsByTagName("li")[4].style.color="blue"
document.getElementsByTagName("li")[4].textContent="new item"*/

document.getElementsByClassName("list-group-item")[1].style.backgroundColor="pink"
//document.getElementsByClassName("list-group-item")[2].style.display="none"
document.getElementsByTagName("input")[1].value="ok"
document.querySelector("input[type='submit']").value="okkkk"
document.querySelectorAll(".list-group-item")[1].style.color="green"
document.querySelector(".list-group").lastElementChild.style.fontStyle="italic"
document.querySelector(".list-group-item:last-child").style.fontWeight="bold"

let odd=document.querySelectorAll(".list-group-item")
for(i=0;i<odd.length;i+=2){
    odd[i].style.backgroundColor="blue"
}