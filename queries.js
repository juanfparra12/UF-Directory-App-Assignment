/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    listings = require('./listings.json'),
    config = require('./config.js');
    
    /* Connect to your database */
    mongoose.connect(config.db.uri,
    {
      useMongoClient: true,
    });


var findLibraryWest = function() 
{
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name: "Library West"},function(err,listing)
   {
     if(err)
      throw err;
     console.log(listing);
   })
};

var removeCable = function() 
{
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   Listing.find({"code": "CABL"}, "", function (err, listing) 
   {
       if (err)
           throw err;

       retrieveAllListings();

   });
};

var updatePhelpsLab = function() 
{
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

   Listing.find({"name": "Phelps Laboratory"}, "", function (err, listing) 
   {
        if (err)
            throw err;

        listing.address = 'Phelps Lab, Gainesville, FL 32611, United States';
        listing.save(function (err) 
        {
            if (err) 
            {
                throw err;
            }
        });

        console.log(listing);
    });
};

var retrieveAllListings = function() 
{
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

   Listing.find({}, function(err, listing){
     if(err) 
      throw err;
     console.log(listing);
    });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
