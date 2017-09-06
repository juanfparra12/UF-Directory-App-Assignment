'use strict';

/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    listing = require('./listings.json'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');


/* Connect to your database */
mongoose.connect(config.db.uri,
{
  useMongoClient: true,
});

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
      console.log(listing.entries.length);

      //This for loop creates each individual listings on the JSON file.
      for(var i = 0; i < listing.entries.length; i++)
      {
        var newListing = new Listing(listing.entries[i]);
        newListing.save(function(err)
        {
        });
      }

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
