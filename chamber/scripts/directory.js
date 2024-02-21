document.addEventListener("DOMContentLoaded", function() {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const display = document.querySelector(".display");

    gridButton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
    });

    // Fetch member data from JSON file
    fetch("/data/members.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (Array.isArray(data.members)) {
                data.members.forEach(member => {
                    const section = document.createElement("section");

                    if (
                        member.name &&
                        member.address &&
                        member.phone &&
                        member.website &&
                        member.image
                    ) {
                        const img = document.createElement("img");
                        img.src = member.image;
                        img.alt = member.name;
                        img.width = 240; 
                        img.height = 120; 
                        img.classList.add("member-image"); 

                        const h3 = document.createElement("h3");
                        h3.textContent = member.name;

                        const pAddress = document.createElement("p");
                        pAddress.textContent = member.address;

                        const pPhone = document.createElement("p");
                        pPhone.textContent = member.phone;

                        const aWebsite = document.createElement("a");
                        aWebsite.href = member.website;
                        aWebsite.textContent = "Website";
                        aWebsite.target = "_blank";

                        section.appendChild(img);
                        section.appendChild(h3);
                        section.appendChild(pAddress);
                        section.appendChild(pPhone);
                        section.appendChild(aWebsite);

                        display.appendChild(section);
                    } else {
                        console.error("Member data is incomplete:", member);
                    }
                });
            } else {
                console.error("Member data is not an array:", data.members);
            }
        })
        .catch(error => console.error("Error fetching member data:", error));
});     