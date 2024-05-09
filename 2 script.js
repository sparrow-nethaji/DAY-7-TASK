fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithLessThan2LakhPopulation = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", countriesWithLessThan2LakhPopulation);
  })
  .catch(error => console.log("Error fetching data:", error));
