fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesUsingUSD = data.filter(country => {
      return country.currencies && country.currencies.USD; // Check if USD is in the currencies list
    });

    if (countriesUsingUSD.length > 0) {
      console.log("Countries using US dollars as currency:");
      countriesUsingUSD.forEach(country => {
        console.log(country.name.common);
      });
    } else {
      console.log("No country found that uses US dollars as currency.");
    }
  })
  .catch(error => console.log("Error fetching data:", error));
