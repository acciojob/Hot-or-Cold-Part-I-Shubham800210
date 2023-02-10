//your code here

let  b =document.getElementById('btn');

  b.addEventListener('click',() =>{
    let n =document.getElementById("guess").value; //intput nuber
   
    let r =Math.random()*20;  //random nuber
    let p =document.getElementById("respond");


if(Math.abs(n,r)<= 5){ //check
  
p.innerText="Hot";
}
else{
    p.innerText="Cold"
}

});