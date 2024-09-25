var head=document.getElementById("head1")
console.log(head);
head.style.color="blue";
head.textContent="changed."
head.innerHTML="<h6>changed into h6</h6>"
//class
var c=document.getElementsByClassName("c");
for(let i=0;i<c.length;i++)
{
    c[i].style.backgroundColor="yellow";
}
var t = document.getElementsByTagName('li');
t[1].style.color="red";
//query
let val=document.querySelector("input");
val.value="name"
//query selector using id
var save=document.querySelector("#save");
save.style.backgroundColor="skyblue"
//events

