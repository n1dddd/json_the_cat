const {fetchBreedDescription} = require('../breedFetcher');

const {assert} = require('chai');

describe("#fetchBreedDescription", () => {
  it('returns a string description for a valid breed, via a callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err,null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error log if an invalid/non-existant breed is passed into fetchBreedDescription, via callback', (done) => {
    fetchBreedDescription('uhhh', (err,desc) => {
      assert.equal(err, err);
      assert.equal(desc,null);

      const expectedErr = "Cat Breed not found!";

      assert.equal(expectedErr, err.trim());

      done();
    });
  });
});