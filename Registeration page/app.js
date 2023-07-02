let Users=[]

function register() {
let nameInput= document.getElementById("name");
let numberInput= document.getElementById("roll");
 let details ={
    userName:nameInput.value,
    number:numberInput.value,
 }
 let rollCount=Users.filter((user)=>{
    return user.number==details.number;
 });    
 if(rollCount.length==0){
    Users.push(details);
}
else{
    alert("User already exists with same Roll no.");
};
console.log(Users);

};