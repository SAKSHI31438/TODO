let btn= document.querySelector(".add");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");

btn.addEventListener("click" ,function(){
  let item=document.createElement("Li");
  item.innerHTML=inp.value;
  let dlbtn= document.createElement("button");
  dlbtn.innerText="Delete task";
  dlbtn.classList.add("delete");


  item.appendChild(dlbtn);
  ul.appendChild(item);
  inp.value="";
});

ul.addEventListener("click", function(event){
  if(event.target.nodeName=="BUTTON"){
    let lisItem=event.target.parentElement;
    lisItem.remove();

  }
});