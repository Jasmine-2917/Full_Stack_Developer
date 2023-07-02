let Users=[]

function register() {
let nameInput= document.getElementById("name");
let numberInput= document.getElementById("roll");
 let details ={
    userName:nameInput.value,
    number:numberInput.value,
 }
Users.push(details);
console.log(Users);
}