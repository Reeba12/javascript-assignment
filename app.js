// CHAP:38-42
// // question:1

// function power(base, exponent) {
//         var result = 1;
//         if(exponent == undefined)
//             exponent = 2;
//         for(var i=1; i<=exponent; i++) {
//             result = result * base;
//         }
//         return document.write(result);
//     }
// power(3,6);

//question:2

// function year(a){
//     if (a % 4 == 0) {
//         alert("it's a leap year")
//     }else{
//         alert("it's not a leap year")
//     }
// }
// var b = year(prompt("enter year"));

//question:3

// function ValueOfS(a,b,c){
// 	S = (a + b + c) / 2;
//     return S;
// }

// function AreaOfTriangle(S,a,b,c){
// 	area = S * (S - a) * ( S - b ) * (S - c)
//     return area;
// }
// a = 10, b = 15, c = 20;
// document.write(AreaOfTriangle(ValueOfS(a,b,c),a,b,c).toFixed(3))

//question :4
// function mainFunc(){
//     var s1 = +prompt("Enter number of 1st subject: ")
//     var s2 = +prompt("Enter number of 2nd subject: ")
//     var s3 = +prompt("Enter number of 3rd subject: ")

//     total = (s1)+(s2)+(s3);

//     var avg = Avg(total)
//     percent = Percentage(total);
    
//     alert("Average: " + avg + '\n' + "Percentage: " + percent)
// }
// function Avg(total){
//     ans = +total/3;
//     return +ans.toFixed(2);
// }
// function Percentage(total){
//     var percen = (+total/300)*100;
//     return percen.toFixed(2)+"%";
// }
// mainFunc()

// question :5

// function findIndex(string,target){
//     for (var i = 0; i<= string.length; i++){
//        if (string[i] == target){
//         index = i;
//         }
//     }
//     return "Index of "+ target +" is : " + index; 
// }
// string = prompt("enter  string")
// target = prompt("enter target")
// document.write(findIndex(string,target));

// question:6

// var string = prompt("enter string");
// var vowel = ["a", "e", "i", "o", "u"];

// function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//                 j--;           // take the removed character into account
//                 secondLoop--;  // string is now one character shorter
//             }

//         }
//     }
// }

// name ();
// console.log(string);

// question:7

// var string = prompt("Enter string: ");

// var li = [];

// for (var i = 0; i<=string.length-2; i++){
//     var target = string[i].toLowerCase()+string[i+1].toLowerCase();
//     switch(target){
//         case "aa" :
//             li.push("aa");
//             break;
//         case "ae" :
//             li.push("ae");
//             break;
//         case "ai" :
//             li.push("ai");
//             break;
//         case "ao" :
//             li.push("ao");
//             break;
//         case "au" :
//             li.push("au");
//             break;

//         case "ea" :
//             li.push("ea");
//             break;
//         case "ee" :
//             li.push("ee");
//             break;
//         case "ei" :
//             li.push("ei");
//             break;
//         case "eo" :
//             li.push("eo");
//             break;
//         case "eu" :
//             li.push("eu");
//             break;

//         case "ia" :
//             li.push("ia");
//             break;
//         case "ie" :
//             li.push("ie");
//             break;
//         case "ii" :
//             li.push("ii");
//             break;
//         case "io" :
//             li.push("io");
//             break;
//         case "iu" :
//             li.push("iu");
//             break;

//         case "oa" :
//             li.push("oa");
//             break;
//         case "oe" :
//             li.push("oe");
//             break;
//         case "oi" :
//             li.push("oi");
//             break;
//         case "oo" :
//             li.push("oo");
//             break;
//         case "ou" :
//             li.push("ou");
//             break;

//         case "ua" :
//             li.push("ua");
//             break;
//         case "ue" :
//             li.push("ue");
//             break;
//         case "ui" :
//             li.push("ui");
//             break;
//         case "uo" :
//             li.push("uo");
//             break;
//         case "uu" :
//             li.push("uu");
//             break;
//     }
// }
// document.write(`There are ${li.length}  Vowel Succession in ${string} <br> <br>`);
// for (let i = 0; i <= li.length-1; i++ ){
//     document.write(`Vowels in succession: ${li[i]} <br>`);
// }