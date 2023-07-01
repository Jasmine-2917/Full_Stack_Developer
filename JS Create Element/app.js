// let a=[0,1,2,3,4,5,6,7,8,9,10]
// let b=[1,2,3,4,5,6,7,8,9,10]


// let result=b.map((num)=>{
//     return num*num})

// function sqr(num){
//     return num*num;
// }
// let resullt=a.map(sqr)
// console.log(resullt)
// console.log(result)

// let filters= a.filter((num)=>{
//  return num>5;
// }) 
// console.log(filters)

// let even=a.filter((num)=>{
//     return num%2==1 ;
// })


// console.log(even)


// // chaining
// let chaining=a.filter((x)=>{
//     return x%2==0 }).map((x)=>{
//         return x*x;
//     })

// console.log(chaining)

// let chain=a.map((x)=>{
//     return x*x;
// }).filter((num)=>{
//     return num%2==1;
// })



// console.log(chain)


let users=[]
function renderUsers(){
    let userContainer = document.getElementById('users');
    users.map((user)=>{
        let div = document.createElement(div);
        let userName = document.createElement(p);
        let userEmail = document.createElement(p);
        div.classList.add('user');

        userName.innerText=user.name;
        userEmail.innerText=user.email;

        userContainer.appendChild('div');
        div.appendChild('userName');
        div.appendChild('userEmail');
    })
}
function Register(){
let name=document.getElementById('name');
let email=document.getElementById('email');

let student = {
    name: name.value,
    email: email.value,     
}
let emailCount=users.filter((user)=>{
    return user.email==email.value;
})
if (emailCount.length==0){
    users.push(student);
}
else{
    alert('The user with same Email already exists!');
}
renderUsers();
console.log(users)
}












