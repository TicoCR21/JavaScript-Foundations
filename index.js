// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
const principal     = 200000;
const interest_rate = 0.05;
const years         = 30;

const name = "Mario";


// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/
let monthlyInterestRate = interest_rate / 12;
let periods             = years * 12; 


// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/

let monthlyRate = ( principal, interest_rate, years ) =>  principal * ( ( interest_rate / 12 ) * ( Math.pow( 1 + ( interest_rate / 12 ), years * 12 ) ) / ( Math.pow( 1 + ( interest_rate / 12 ), years * 12 ) - 1 ) );

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
function mortgageCalculator()
{
    console.log( `${ name }, your monthly rate is ${ monthlyRate( principal, interest_rate, years ).toFixed( 2 ) }` );
}

mortgageCalculator();


// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
*/

function mortgageCalculator2( principal, interest_rate, years )
{
    console.log( `${ name }, your monthly rate is ${ monthlyRate( principal, interest_rate, years ).toFixed( 2 ) }` );
}

mortgageCalculator2( 200000, 0.05, 30 );


// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/
function mortgageCalculator3( principal, interest_rate, years, credit_score )
{
    if( credit_score > 740 )
        interest_rate -= 0.0005;
    else if( credit_score < 660 )
        interest_rate += 0.0005;

    console.log( `${ name }, your monthly rate is ${ monthlyRate( principal, interest_rate, years ).toFixed( 2 ) }` );
}

mortgageCalculator3( principal, interest_rate, years, 680 );

// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment 
for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

function variableInterestRate( principal, interest_rate, years )
{
    interest_rate -= 0.02;
    for( let i = 0; i < 10; i++, interest_rate = Math.round( ( interest_rate + 0.005 ) * 1000 ) / 1000 )
        console.log( `${ name }, with an interest rate of ${ interest_rate }, your monthly rate is ${ Math.round( monthlyRate( principal, interest_rate, years ) ) }` );
}

variableInterestRate( 200000, 0.04, 30 );

// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */
function mortgageCalculator4( principal, interest_rate, years, property_tax, home_insurance, hoa )
{
    console.log( `${ name }, your monthly rate with PropertyTax, Home Insurance and HOA is ${ ( monthlyRate( principal, interest_rate, years ) + property_tax + home_insurance + hoa ).toFixed( 2 ) }` );
}

mortgageCalculator4( principal, interest_rate, years, 400, 40, 300 );

/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */
function maxLoanAmount( monthly_payment, interest_rate )
{
    console.log( `Max Loan( 30 years ): ${ Math.round( monthly_payment / ( ( interest_rate / 12 ) * ( Math.pow( 1 + ( interest_rate / 12 ), years * 12 ) ) / ( Math.pow( 1 + ( interest_rate / 12 ), years * 12 ) - 1 ) ) ) }` );
}

maxLoanAmount( 3500, 0.05 );

/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */
let a = prompt( "Enter Principal: " );
let b = prompt( "Enter Interest Rate: " );
let c = prompt( "Enter Loan Term in Years: " );
mortgageCalculator2( a, b, c );


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
function variableInterestRate2( principal, interest_rates )
{
    for( i in interest_rates )    
        console.log( `${ name }, with an interest rate of ${ interest_rates[ i ] }, your monthly rate is ${ Math.round( monthlyRate( principal, interest_rates[ i ], years ) ) }` );
}

variableInterestRate2( 200000, [ 0.03, 0.04, 0.05, 0.06 ] );
