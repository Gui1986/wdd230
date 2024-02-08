const baseURL = "https://gui1986.github.io/wdd230/";
const linksURL = "https://gui1986.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    // Process the data further here if needed
  } catch (error) {
    console.error('Error fetching links data:', error);
  }
}

getLinks();
