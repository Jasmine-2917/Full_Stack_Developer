
let MagicStatus=false;
let Magicbtn= document.getElementById('StartMagic');
let StopMagicBtn= document.getElementById('StopMagic');

function CheckMagicStatus(){
if (MagicStatus==true){
Magicbtn.style.display= 'none';
StopMagicBtn.style.display='block';
}
else{
 Magicbtn.style.display= 'block';
StopMagicBtn.style.display='none';
}
}

function StartMagic(){
MagicStatus=true;
let title= document.getElementById("title");
title.classList.add('magic');
CheckMagicStatus()
}

function StopMagic(){
MagicStatus=false;
let title= document.getElementById("title");
title.classList.remove('magic');
CheckMagicStatus()
}


let sum;
function abc(num1,num2){
 sum= num1+num2;
}
let num1=3;
let num2=4;
abc(num1,num2);
 console.log(sum);

arrowKeyFunction=() =>{
    // logic
}

Multiply= (num1,num2)=>{
    return(num1*num2);
}
console.log(Multiply(3,4));

Subtract= (num1,num2)=> num1-num2;

console.log(Subtract(29,10));

