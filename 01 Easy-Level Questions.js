

// Question 1.Write a function to check the grade of a student based on the score:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F


let marks=76;
if(marks>=90 && marks<=100){
    console.log("A grade");
}
else if(marks>=80 && marks<=89){
    console.log("B grade");
}
else if(marks>=70 && marks<=79){
    console.log("C grade");
}
 else if(marks>=60 && marks<=69){
    console.log("D grade");
 }
 else{
    console.log("F GRADE");
 }