fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((acc, country) => {
      return acc + (country.population || 0); // Handling cases where population data is missing
    }, 0);

    console.log("Total Population:", totalPopulation);
  })
  .catch(error => console.log("Error fetching data:", error));
