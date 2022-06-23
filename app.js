console.log("Hello World!\n==========\n");
console.log("EXERCISE 1:\n==========\n");
// Exercise 1 Section - Use a FOR LOOP. Iterate thru numbers 1-100. Print odd numbers
for(var i = 0; i <= 100; i++) {
   
    if (i % 2 != 0) {
        console.log(i)
    }
 
}

// Exercise 2 Section - "FizzBuzz" - 
console.log("EXERCISE 2:\n==========\n");
for(var i = 1; i <= 100; i++) {
   
    // test 

   if( i % 3 == 0 && i % 5 == 0) { 
        console.log(i + ":" + "FIZZBUZZ") 
    }
   else if ( i % 3 == 0) { 
    console.log(i +":" + "FIZZ") 
    }
   else if (i % 5 == 0) { 
    console.log(i +":" + "BUZZ")
    }
   
  
}