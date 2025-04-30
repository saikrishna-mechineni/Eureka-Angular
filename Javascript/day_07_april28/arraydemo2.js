

let arr = [10,20,30,40,50];

//splice(index value, deletion, insertion)
arr.splice(2,1)
console.log(arr);

arr.splice(2,0,30)
console.log(arr);

//toSpliced will create a new array without disturbing anything
let newArr = arr.toSpliced(1,2);
console.log(newArr);






