/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri,
{
  useMongoClient: true,
});



var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({ name: 'Library West' }, function(err, listing) {
	  if (err)
      throw err;

	  // print out listing information
	  console.log(listing);
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
	  if (err)
      throw err;

	  console.log('CABL has been deleted!');
	});
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOneAndUpdate({ code: 'PHL' }, { address: 'New Address' }, function(err, listing) {
	  if (err) 
      throw err;		//changes address of PHL (New Address is used because updated address was not given in assignment
	});

	Listing.find({ code: 'PHL' }, function(err, listing) {
	  if (err) 
      throw err;

	  //Displays the 
	  console.log(listing);
	});
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, listings) {
   if (err) 
    throw err;

   //Displays all the updated listings from the JSON file on the terminal 
   console.log(listings);
	});
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
