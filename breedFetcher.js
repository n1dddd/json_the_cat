const request = require('request');

const breed = process.argv.slice(2)[0];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    if (data[0] !== undefined) {
      console.log(data[0].description);
    } else {
      console.log("Requested cat breed not found!");
    }
  } else {
    console.log(error.message);
    console.log("It seems there is a problem connecting to the url, please double check to make sure the address is correct");
  }
});