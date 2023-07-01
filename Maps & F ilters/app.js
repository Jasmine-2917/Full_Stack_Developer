let a=[1,2,3,4,5,6,7,8,9]
function sqr(num){
    return num*num;
}

let answer= a.map(sqr);



// function cube(num){
//  return num*num*num;
// }

let result= a.map(cube=(num)=> {
    return num*num*num});


let even=a.filter(filter=(num)=>{
    return num%2==0;
}
)


console.log(even)
console.log(result)
console.log(answer)