function getGrades() {
    const grades = document.getElementById("grades").value;

    const gradesArray = grades.split(", ");

    const clean = gradesArray.map((grade) => grade.toUpperCase());
    console.log(clean);
    return clean;
  }
  
function clickHandler()
{
    const grades = getGrades();
    const gpa = calculate(grades);
    display(gpa);
}

function lookupGrade(grade)
{
    if (grade === "A")
    {
        return 4.0
    }
    
    else if (grade === "B")
    {
        return 3.0
    }
    
    else if (grade === "C")
    {
        return 2.0
    }
    
    else if (grade === "D")
    {
        return 1.0
    }
    
    else
    {
        return 0.0
    }
}

function calculate(grades)
{
    let gpaList = grades.map((grade) => lookupGrade(grade));
    const adder = (sum, num) => sum + num;

    const total = gpaList.reduce(adder);
    return (total / gpaList.length).toFixed(2);
}

function display(gpa)
{
    document.getElementById("output").innerText = gpa
}

document.getElementById("submitButton").addEventListener("click", clickHandler);