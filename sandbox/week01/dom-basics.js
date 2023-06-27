const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://placeimg.com/200/200/animals');
newImage.setAttribute('alt', 'Place holder animal image')
document.body.appendChild(newImage);

const newSection = document.createElement('section');
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to JavaScript Language</p>";
document.body.appendChild(newSection);