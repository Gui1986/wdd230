const todaysdate = new Date();

// to insert the current year next to copyright symbol.
let copyrightYear = todaysdate.getFullYear();

let footer = document.querySelector("footer");
let span = footer.querySelector("span");
span.insertAdjacentText("beforeend", copyrightYear);

// to insert the date the page was last modified.
let lastMod = new Date(document.lastModified);
document.getElementById("lastMod").textContent = lastMod;