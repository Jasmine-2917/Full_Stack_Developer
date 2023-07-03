let Users=[]



function renderUsers(){
   let UserContainer = document.getElementById('students');
   UserContainer.innerHTML=" ";
   Users.map((user)=>{
      let div = document.createElement('div');
      let name = document.createElement('p');
      let rollNo = document.createElement('p');
      div.classList.add('student-name');

      name.innerText = user.name;
      rollNo.innerText = user.rollNo;

      UserContainer.appendChild(div);
      div.appendChild(name);
      div.appendChild(rollNo);


   })

}

function successAlert(){
   let alert=document.getElementById('alert');
   alert.classList.add('alert');
   alert.innerText="User Registered Successfully!";
   setTimeout(()=>{
   alert.style.removeProperty('alert');
   alert.innerText=" ";
   },1500)
}

function register() {
let nameInput= document.getElementById("name");
let numberInput= document.getElementById("roll");
 let details ={
    name:nameInput.value,
    rollNo:numberInput.value,
 }
 let rollCount=Users.filter((user)=>{
    return user.rollNo==details.rollNo;
 });    
 if(rollCount.length==0){
    Users.push(details);
    successAlert();
}
else{
    alert("User already exists with same Roll no.");
};
renderUsers();
console.log(Users);



};