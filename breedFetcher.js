const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data[0] !== undefined) {
        const desc = data[0].description;
        callback(error,desc);
      } else {
        callback("Cat Breed not found!", error);
      }
    } else {
      callback(error);
    }
  });
};
module.exports = {
  fetchBreedDescription
};

