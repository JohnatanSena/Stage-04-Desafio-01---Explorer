/* 
- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

*/
let numberOne = Number(prompt(`Write the first Number`))
let numberTwo = Number((prompt(`Write the second number`)))

alert(numberOne + numberTwo); 
alert(numberOne - numberTwo) ;
alert(numberOne / numberTwo) ;
alert(numberOne * numberTwo) ;
alert(numberOne % numberTwo) ;

if(numberOne % numberTwo == 0){
  alert(`the sum of numbers was pairs: ${numberOne + numberTwo}` )
} else {
  alert(`the sum was odd: ${numberOne + numberTwo}`)
}

