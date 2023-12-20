const name = "Rajesh";
const age = 28;

// console.log(name + age ); dont use this type of syntax bcos this old dated 

// In concatination we should use backticks (``) 

//console.log(`Hello my name is ${name} and my age is ${age}`);    /* this is better and readable code & 
                                                                    //this is called as string Interpolation */

// If we want to display name in upper case

//console.log(`Hello my name is ${name.toUpperCase()} and my age is ${age}`); // We can do this 

/*  const name = "Rajesh"; => this is the first way to declare string 
    const gameName = new string ('Rajesh'); => This is the second way 
    const gameName = new string ('Rajesh'); => This will give result like 
*/

 /*     0 = 'R'
        1 = 'a'  like key vallue pair.Basicaly like we fetch data in array in Java but in java script this is not an array 
 */

 /* Now suppose if we want to fetch 'a' from string('Rajesh') then syntax will be like 
    conole.log(gameName[1]);  This will return 'a'. 
*/

/* If we want to know length of an string  the we will use : 

 console.log(gameName.length);  Like this we can use other function related to string ex charAt() and other  */

 //-----------------------------------------//-----------------------------------------------------------------//

// Trim Or Replace Method // 

const newString = "   Rajesh. "
// console.log(newString);
// console.log(newString.trim());

// Some Time user provides extra space in forms that time we use this method

//----------------------------------//----------------------------------------------------------//

// Replace Example

const url = "https://Rajesh.com/Rajesh%30Vhanmane"

console.log(url.replace('%30','_'))

// String is very important part there are so many function we can understand from mdn documenatation