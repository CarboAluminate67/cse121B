//Activity 1 - Map
let array = ['one', 'two', 'three'];
let newArray = array.map(function callback(current){
    return '<li>'+current+'</li>';
})

const listElement = document.getElementById("myList")
listElement.innerHTML = newArray.join();

//Activity 2 - Map
let grades = ['A', 'C', 'D', 'B', 'A', 'B'];
function gpa(grade)
{
    if (grade == 'A')
    {
        return 4;
    }
    else if (grade == 'B')
    {
        return 3;
    }
    else if (grade == 'C')
    {
        return 2
    }
    else if (grade == 'D')
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

let gpaPoints = grades.map(gpa(i));

//Activity 3 - Reduce
const GPA = gpaPoints.reduce(function callback(sum, i)
{
    return total + i;
})
GPA = sum/gpaPoints.length;

//Activity 4 - Filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let longFruits = fruits.filter((word) => word.length > 6);

//Activity 5 - IndexOf
const nums = [12, 34, 21, 54];
const lucky = 21
if (nums.indexOf(lucky) != -1)
{
    return true
}