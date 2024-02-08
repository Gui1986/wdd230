// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Specify the latitude and longitude of Trier, Germany using the information you have gathered and the examples provided.
const latitude = '49.75';
const longitude = '6.64';

// Provide your API key: "appid=[enter your key here]"
const apiKey = 'your_api_key_here';

// Define an asynchronous function named "apiFetch()"
async function apiFetch() {
  try {
    const response = await fetch(`${url}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

// Build the displayResults function to output to the given HTML document.
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}
