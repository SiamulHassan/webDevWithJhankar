

// ::::: converting feet into mile ::::::

// let feet = 50;
// function feetToMile(){
//     let calcMile =  feet / 5280;
//     return calcMile;
// }

// let feetValueToMile = feetToMile(feet);
// console.log(feetValueToMile);

// ::::: wood calculating :::::::

// let makeChair = 2;
// let makeTable = 3;
// let makeBed = 4;
// function woodCalc(chair,table,bed){

//     let chairWoodNeed = (chair * 1);

//     let tableWoodNeed = (table * 3);

//     let bedWoodNeed = (bed * 5);
//    return  [chairWoodNeed,tableWoodNeed,bedWoodNeed];
// }
// let storeWoodNeed = woodCalc(makeChair,makeTable,makeBed);
// let valueOfchair = storeWoodNeed[0];
// console.log(`For chair you need` + ' ' + valueOfchair + ' ' + 'pieces of wood');

// let valueOfTable = storeWoodNeed[1];
// console.log(`For table you need` + ' ' + valueOfTable + ' ' + 'pieces of wood');

// let valueOfBed = storeWoodNeed[2];
// console.log(`For chair you need` + ' ' + valueOfBed + ' ' + 'pieces of wood');

// :::: brick calculation ::::::

// let floor = 53;
// let brickNeeded = 0;
// function brickCalc(){
//     if(floor <= 10){
//         brickNeeded = 'Brick needed for' + ' ' + floor + ' ' + 'floor is' + ' ' + floor * (15 * 1000);
//     }
//     else if(floor <= 20){
//         let calcFirstTen = 10 * (15 * 1000);
//         let remainFloor = floor - 10;
//         let brickForSecTen = remainFloor * (12 * 1000);
//         brickNeeded = 'Brick needed for' + ' ' + floor + ' ' + 'floor is' + ' ' +(calcFirstTen + brickForSecTen);
//     }
//     else{
//         let calcFirstTen = 10 * (15 * 1000);
//         let calcSecTen = 10 * (12 * 1000);
//         let remainFloor = floor - 20;
//         let brickForThird = remainFloor * (10 * 1000);
//         brickNeeded = 'Brick needed for' + ' ' + floor + ' ' + 'floor is' + ' ' + (calcFirstTen + calcSecTen + brickForThird);
//     }
// }
// brickCalc(floor);
// console.log(brickNeeded);

//  :::::::: find small friend name ::::::::

// let nameArrays = ['Siam','Kamal', 'Mo', 'Mokles', 'dhfajsdhf', 'sia', 'ddddddd'];
// let compare = nameArrays[0].length;

// function tinyFriend(){
//     for(i=1; i<nameArrays.length;i++){
//         let elements = nameArrays[i].length;
        
//      if(elements < compare | elements < compare.length){
//         elements = nameArrays[i];
//         compare = elements;

//      }
// }
// }
// tinyFriend(nameArrays);
// console.log('The smallest string is' + ' ' + compare);

// ::::::: find the largest friend name of an Array ::::::



