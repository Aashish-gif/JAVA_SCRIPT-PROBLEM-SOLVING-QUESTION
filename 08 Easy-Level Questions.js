// 8.Find the Average of an Array
let arr=[1,2,3,4,5]
function average(){
let sum=0;
let len=arr.length;
for(let i=0;i<len;i++){
    sum=arr[i]+sum
}
avg=sum/len
console.log(avg)
}
average()