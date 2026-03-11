// console.log("Hello World");
// var num=10;
// console.log(num);
// console.log(typeof(num));
// num="Hello World";
// console.log(num);
// console.log(typeof(num));
// num=true;
// console.log(num);
// console.log(typeof(num));
// num=null;
// console.log(num);
// console.log(typeof(num));
// num;
// console.log(num);
// console.log(typeof(num));
// const sym1= Symbol(4)
// console.log(sym1);
// const sym2 =Symbol(4);
// console.log(sym2);
// if(sym1===sym2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
// var count
// document.write("Starting Loop "+ "<br>");
// for(count=0;count<10;count++) {
//     document.write("Current count:"+count);
//     document.write("<br/>");
// }
// document.write("Loop stopped!");
// const person={
//     fname:"Ajay",
//     lname:"Singh",
//     age:25,
// };
// for(let x in person){
//     console.log("person details:"+x+":"+person[x]);
// }
// var age = 20;
// if(age>18){
//     document.write("<b>You are eligible to cast the vote.</b>");
// }
// else{
//     document.write("<b>You are not eligible to cast the vote.</b>");
// }   
     var grade='C';
     document.write("Entering switch block<br />");
     switch(grade){
        case 'A':
            document.write("Good job<br />");
            break;      
        case 'B':
            document.write("Pretty good<br />");
            break;
        case 'C':
            document.write("Passed<br />");
            break;
        case 'D':   
            document.write("Not so good<br />");
            break;
        case 'F':
            document.write("Failed<br />");
            break;
        default:
            document.write("Invalid grade!<br />");
     }
