/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const name  = 'Alex';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerText = name;

// Step 3: declare and instantiate a variable to hold the current year
const year = '2023';

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerText = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
const image = 'images/selfImage.jpg';


// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
const myImage = document.querySelector('img')
myImage.setAttribute('src', image);
myImage.style.height = '300px';
myImage.style.width = '200px';


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const food = [' birria tacos', ' pizza', ' fish', ' nachos']

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerText = food;


// Step 3: declare and instantiate a variable to hold another favorite food
const newFood = ' ACP';

// Step 4: add the variable holding another favorite food to the favorite food array
food.push(newFood);

// Step 5: repeat Step 2
document.querySelector('#food').innerText = food;

// Step 6: remove the first element in the favorite foods array
food.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerText = food;

// Step 8: remove the last element in the favorite foods array
food.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerText = food;


