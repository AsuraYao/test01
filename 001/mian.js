;(function () {
    'use strict';

// var num = parseFloat('width:12.5px');
// if(num==12.5){
//    alert(12.5);
// }else if(num==NaN){
//     alert(NaN);
// }else if(typeof num=='number'){
//     alert(0);
// }else{
//     alert('啥也不是');
// }


// for(var i = 1 ; i<10 ; i+=2){
//   if(i<5){
//   i++;
//    continue;
//  }else{
//    i+=3;
//    break;
//  }
// }
// console.log(i);


// var a = 123;
// a = +a;
// console.log('a :', a);

// var result = 1 + +'2' +3;
// console.log('result :', result);
// console.log('typeofresult :', typeof result);


// let arr = [
//     1,
//     2,
//     666,
//   ];

//   console.log('arr :', arr[2]);


//   let arr2 = [
//     1,
//     2,
//     [ 666 ],
//   ];

//   console.log('arr2 :', arr2[2][0]);

//   let arr3 = [
//     [
//       [1, 5],
//       ['whh', 666],
//     ],
//   ];

//   console.log('arr3 :', arr3[0][1][1]);


//   let arr4 = [
//     [
//       [100, 'Emmm'],
//       [
//         2, 'yo', [666],
//       ],
//     ],
//   ];

//   console.log('arr4 :', arr4[0][1][2][0]);


//   let obj = {
//     a: 1,
//     b: 2,
//     c: 666,
//   };

//   console.log('obj :', obj.c);

//   let obj2 = {
//     a: 1,
//     b: {
//       yo: {
//         em: '6',
//         ha: 666,
//       },
//     },
//   };

// console.log('obj2 :', obj2.b.yo.ha);

// let obj3 = {
//     a: 1,
//     b: {
//         yo: [
//         2,
//         'La',
//         {
//         muhaha: '~',
//         a: 666,
//       }
//       ],
//     },
//   };


// console.log('obj3 :', obj3.b.yo[2].a);

// let obj4 = {
//     a: 1,
//     b: {
//       x: [
//         2, {ya: [666]},
//       ],
//     },
//   };

//   console.log('obj4 :', obj4.b.x[1].ya[0]);


//   let obj5 = {
//     a: [3, 5],
//     b: ['Yo', 1],
//   };


//   console.log('obj5 :', obj5.a.length);
//   console.log('obj5 :', obj5.b.length);


//   let obj6 = {
//     a: {foo: 2},
//     yo: [3, 5],
//     b: {
//       la: {
//         name: 'Wood',
//         x: [5, 'a', 'c'],
//         muhaha: ['Bob', 'Huahua'],
//         length: 100,
//       },
//     },
//   };

//   console.log('obj6 :', obj6.yo.length+obj6.b.la.x.length+obj6.b.la.muhaha.length);


let userList1 = [
  '王花花',
  '李栓蛋',
  '刘备备',
  '赵可爽',
];

let userList2 = [
  'a',
  'b',
  'c',
  'd',
]

function breaker(badAss, userList){
  for (let i = 0; i < userList.length; i++) {
    let item = userList[i];
    
    if ( item === badAss)
    break;

    console.log('item :', item);
  }
}

breaker('刘备备', userList1);



function a(arr,err) {

  err();
  let z = 1;
  let x = 2;
  console.log('z+x :', z+x);
  arr();
}

function b() {
  console.log('yo');
}

function c (){
  
  console.log('hho');
}

a(b,c);

   })();