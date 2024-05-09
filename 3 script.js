fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", Array.isArray(country.capital) ? country.capital[0] : country.capital); // Handling multiple capitals
      console.log("Flag:", country.flags ? country.flags.svg : "Flag not available"); // Checking if flags exist
      console.log("----------------------------------");
    });
  })
  .catch(error => console.log("Error fetching data:", error));
