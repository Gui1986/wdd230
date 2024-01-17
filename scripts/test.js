const modeButton = document.querySelector("#mode");
const main = document.querySelector(".parent");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000000";
		main.style.color = "#3e8f40";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eeeeee";
		main.style.color = "#000000";
		modeButton.textContent = "🕶️";
	}
});
