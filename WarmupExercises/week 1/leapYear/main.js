// Function that takes a year
//
// if the divisible by 4 with 0 remainder ( year % 4 === 0 );
//
// if the year is not evenly divisible by 100 ( year % 100 !== 0 )
//
// if the year is also divisible by 400 it IS a leap year ( year % 400 === 0 )
//
// returns a true or false value


var isLeapYear = function( year ){

  // Operators AND ( && ), OR ( || )

  // This is almost like a sentence if you follow it through:
  // if the year % 4, and then if it isn't evenly divisible by 100 but IS
  // evenly by 400, it is a leap year.

  if ( year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 ) ){
    console.log("Is a leap year");
    return true;
  } else {
    console.log("Not a leap year!");
    return false;
  };
}

// Lastly we RETURN a boolean of true or false. The return is so we are actually
// passing information back to the program. The console.logs are just for us.

isLeapYear(1996) // Leap year
isLeapYear(1997) // Isn't a leap year
isLeapYear(2000) // Is a tricky leap year
