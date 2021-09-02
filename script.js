
//  calculating factorial 

// function calcFactorial (factNumber){

//     let multiplied = 1;
//     for (i = 1; i <= factNumber; i++){
//      multiplied = multiplied * i;
//     }
// return multiplied;
// }
// let storeValue = calcFactorial(10);
// console.log(storeValue);

// applying with while loop

// let iniValue = 1;
// let mulValue = 1;
// while(iniValue <= 5){

//     mulValue = mulValue * iniValue;
    
//     iniValue++;
  
// }
// console.log(mulValue);

// solving with recursive way

// function calcFac(factNum){
//     if(factNum == 1 || factNum == 0){
//         return 1;
//     }
//     else{
//         return factNum * calcFac(factNum - 1);
//     }
// }
//  let recusiveStoredFact = calcFac(5);


 //fibonacci


// function calcFibo(fiboNum){

// let fiboArays = [ 0, 1];
//     for ( i = 2; i <= fiboNum; i++){

//     fiboArays[i] = fiboArays[i - 1] + fiboArays[i - 2];
//         }
//     return fiboArays;    
// }
// let fiboResult = calcFibo(5);
// console.log(fiboResult);

//  fibonacchi recursive 

// function calcFibo (fiboNum){
// if(fiboNum == 0){
//  return 0;
// }
// else if(fiboNum == 1){
//     return 1;
// }
// else{
//     return calcFibo(fiboNum - 1) + calcFibo(fiboNum - 2);
// }
// }
// let storeFibo = calcFibo(6);
// console.log(storeFibo);

// fibonacchi dhara

// function fiboDhara(fiboNum){
//     if(fiboNum == 0){
//         return [0];
//     }
//     else if(fiboNum == 1){
//         return [0, 1];
//     }
//     else{
//        let dharaFibo = fiboDhara(fiboNum - 1);          
//       //  dharaFibo = [0, 1]
//        let nextFibo = dharaFibo[fiboNum - 1] + dharaFibo[fiboNum - 2];
//     // dharaFibo = [0, 1];   akhane dharaFibo[(jodi value 2 hoy) 2-1=1 tomo position er value 1 ar 2-2=0 tomo position er value 0]
//     dharaFibo.push(nextFibo);
//     return dharaFibo;

//     }
// }
// let arrayOfFibo = fiboDhara(5);
// console.log(arrayOfFibo);

//  Prime Number 

// function primeNumber(n){
//     if( n % 1 == 0 && n % n == 0){
//         console.log(n + ' ' + 'is a prime number');
//     }
//     else{
//         console.log(n + ' ' + 'is not a prime number')
//     }

// }

// (primeNumber(4));

//  adding all numbers of an array

// let numOfArrays = [1, 2, 3, 4, 5, 6, 7];
// let startAddWith = 0;
// for (i = 0; i < numOfArrays.length; i++){
//     startAddWith = startAddWith + numOfArrays[i];

// }
// console.log(startAddWith);

//  finding the highest number of an array
// let marks = [55,59,66,78,98,12,455,55,635,458];
// let heighestNum = marks[0];
// for(i = 0; i < marks.length; i++){
//     let marksValue = marks[i];
//     if(marksValue > heighestNum){
//         heighestNum = marksValue;
//     }
// }
// console.log(heighestNum);


//  removing same number from array
// let numbers = [1,1,2,2,3,4,5,5,6];
// let checkNum = [];
// for(i = 0; i < numbers.length; i++){
//     let arrayElement = numbers[i];
//     let index = checkNum.indexOf(arrayElement);
//     if(index == -1){
//         checkNum.push(arrayElement);
//     }
//     }
// console.log(checkNum);

//  Calculating length of a string
// let aString = 'The wrose student I found among my students is Sabbu.';
// let countGaps = 0;
// for(let i = 0; i < aString.length; i++){
//     let valueOfAstring = aString[i];
//     if(valueOfAstring == ' '){
//         countGaps++;
//     }
    
// }
// countGaps++;
// console.log(countGaps);

