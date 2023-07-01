let users=[
    {
      "name": "Arnold Velazquez",
      "age": 27,
      "gender": "male",
      "email": "arnoldvelazquez@vurbo.com",
      "phone": "+1 (961) 481-3285",
      "address": "157 Knapp Street, Martinez, Wisconsin, 9923"
    },
    {
      "name": "Head Crosby",
      "age": 24,
      "gender": "male",
      "email": "headcrosby@vurbo.com",
      "phone": "+1 (901) 434-2669",
      "address": "377 Tillary Street, Kipp, Idaho, 2449"
    },
    {
      "name": "Maddox Guzman",
      "age": 20,
      "gender": "male",
      "email": "maddoxguzman@vurbo.com",
      "phone": "+1 (993) 567-2696",
      "address": "909 Rock Street, Fannett, Mississippi, 8399"
    },
    {
      "name": "Osborne Hanson",
      "age": 38,
      "gender": "male",
      "email": "osbornehanson@vurbo.com",
      "phone": "+1 (899) 542-2321",
      "address": "704 Euclid Avenue, Dahlen, Connecticut, 1224"
    },
    {
      "name": "Mayer Griffith",
      "age": 32,
      "gender": "male",
      "email": "mayergriffith@vurbo.com",
      "phone": "+1 (935) 520-2491",
      "address": "225 Crawford Avenue, Marshall, Tennessee, 8399"
    },
    {
      "name": "Fox Houston",
      "age": 29,
      "gender": "male",
      "email": "foxhouston@vurbo.com",
      "phone": "+1 (842) 587-2174",
      "address": "935 Crosby Avenue, Zeba, Vermont, 8844"
    },
    {
      "name": "Brandie Gordon",
      "age": 20,
      "gender": "female",
      "email": "brandiegordon@vurbo.com",
      "phone": "+1 (858) 551-2925",
      "address": "575 Halleck Street, Stockdale, Virgin Islands, 1517"
    }
  ]


let females=users.filter((user)=>{
    return user.gender=="male";
}).map((user)=>{
    return user.name+" "+user.age,user.email;
})


console.log(females)














