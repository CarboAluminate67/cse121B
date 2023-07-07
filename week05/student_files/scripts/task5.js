/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let date = new Date().toLocaleDateString()

// Step 2: Declare another variable to hold the day of the week
let day = new Date().getDay()

// Step 3: Using the variable declared in Step 1, assign  the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed
let message = null;

// Step 5: Using an if statement, if the day of the weekis a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (day > 0 && day <6)
[
    message = 'Hnag in there!'
]

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else{
    message = "WooHooo! It's the weekned!"
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let dayString = null;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch(day)
{
    case 0:
        dayString = 'Sunday';
        break;
    case 1:
        dayString = 'Monday';
        break;
    case 2:
        dayString = 'Tuesday';
        break;
    case 3: 
        dayString = 'Wednesday';
        break;
    case 4:
        dayString = 'Thursday';
        break;
    case 5:
        dayString = 'Friday';
        break;
    case 6:
        dayString = 'Saturday';
        break;
}


/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").innerText = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").innerText = dayString;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
var temples =[];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

function output(temples)
{
    temples.forEach((temple) => {
        document.getElementById("temples").innerHTML += `
        <article>
            <h3>${temple.templeName}</h3>
            <h4>${temple.location}</h4>
            <h4>${temple.dedicated}</h4>
            <img src="${temple.imageURL}" alt="${temple.templeName}}">
        </article>`
    })
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples()
{
    const response = await fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
    if (response.ok)
        {
            temples = await response.json();
            console.log(temples);   
        }
}


// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
getTemples();



// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset()
{
    document.getElementById("temples").innerHTML = '';
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy()
{
    reset()
    sortByValue = document.getElementById("sortBy").value;
    if (sortByValue === 'templeNameAscending')
    {
        temples.sort((a, b) => {return a.templeName.localeCompare(b.templeName)});
        output(temples)
    }
    if (sortByValue === 'templeNameDescending')
    {
        temples.sort((a, b) => {return a.templeName.localeCompare(b.templeName)});
        temples.reverse();
        output(temples);
    }
}

document.getElementById("sortBy").addEventListener('change', sortBy)

// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
