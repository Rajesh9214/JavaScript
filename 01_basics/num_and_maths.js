
// ++++++++++++++++++++++++++++ Number +++++++++++++++++++++++++++++++++++++++//

const score = 400;

// We are explicitely defining that it is number datatype

const bal = new Number(100);
console.log(bal);

//----------------------------------------------//---------------------------------------//
// We can convert number into string 

console.log(bal.toString())

    /* now we have converted number into string so we can use string property here 
            for example we can check length */

   console.log(bal.toString().length)

//----------------------------------------------//---------------------------------------//   
 // There is one mostly used method called to fixed 

   console.log(bal.toFixed(3));
    // Result :-  100.000

    // This all about numbers if for more info we can visit MDN doc

// ++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++//

// console.log(Math);  we can come to know more methods about Math just past this syntax in console

// console.log(Math.abs(-4));         // Absolute value
// console.log(Math.round(4.6));      // makig value roundfiger
// console.log(Math.ceil(4.6));       // making round fig but it is is returning highest value like 5
// console.log(Math.flore(4.6));      // same like above but returning lower value like 4
// console.log(Math.max(3,5,6,2));    // will return max value of an given array 
// console.log(Math.min(2,4,6,3));    // will return min value of an given array 

// There is another method which is imp method is Math.random()

   console.log(Math.random()); // which will return value between 0 to 1

  //  To avoid resulting value as 0

  console.log((Math.random()*10) +1);

  // If we have range 

  const min = 10;
  const max = 20;

 console.log(Math.floor( Math.random() * ( max - min + 1)) + min); // Formula

//  For more Methods visit to MDN doc

//----------------------------------------------------------------------------------------------------------//