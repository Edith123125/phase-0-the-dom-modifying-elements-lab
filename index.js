//  Remove <main> with id "main"
const main = document.getElementById("main");
main.remove();

//  Create a new <h1> element 
const newHeader = document.createElement("h1");

// Set the id of newHeader to "victory"
newHeader.id = "victory";

//  Set newHeader to include your name
newHeader.textContent = "Edith is the champion";

//  Append newHeader
document.body.append(newHeader);
