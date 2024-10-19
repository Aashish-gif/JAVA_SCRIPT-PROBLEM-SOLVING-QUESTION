// 17. Count how many positive and negative numbers are in
// arr = [1, -2, 3, -4, 5, -6] and print the result.

let arr=[1,-2,-3,-4,5,-6];
length=arr.length;
let positive=0;
let negative=0;
for(let i=0;i<arr.length;i++){
     if(arr[i]>0){
         positive++;
     }
     else{
         negative++;
     }
}
console.log(positive,negative)