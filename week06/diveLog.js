let dives = []
const divesOutput = document.getElementById("dives");

function AddDive()
{
    let dive = {
        date: document.getElementById("date").value,
        location: document.getElementById("location").value,
        time: document.getElementById("time").value,
        air: document.getElementById("air").value,
        suit: document.getElementById("suit").value,
        weight: document.getElementById('weight').value,
        vis: document.getElementById("vis").value,
    }
    dives.push(dive);
    DisplayDives();
}

function DisplayDives()
{
    divesOutput.innerHTML = ``;
    dives.forEach(printDive)
}

function printDive(dive)
{
    divesOutput.innerHTML += `<div class="dive">
    <h3>Dive on ${dive.date}</h3>
    <ul>
    <li>Date: ${dive.date}</li>
    <li>Location: ${dive.location}</li>
    <li>Time Under: ${dive.time} minutes</li>
    <li>Air Used: ${dive.air} psi</li>
    <li>Suit: ${dive.suit}</li>
    <li>Weight: ${dive.weight} lb</li>
    <li>Visibility: ${dive.vis} ft</li>
    </ul>
    </div>`
}

function Sort()
{
    sortValue = document.getElementById("sortBy").value;
    if (sortValue === 'date')
    {
        dives.sort((a, b) => {return a.date.localeCompare(b.date)});
        DisplayDives();
    }
    if (sortValue === 'location')
    {
        dives.sort((a, b) => {return a.location.localeCompare(b.location)})
        DisplayDives()
    }
}

document.getElementById("submit").addEventListener('click', AddDive)
document.getElementById("sortBy").addEventListener('change', Sort)