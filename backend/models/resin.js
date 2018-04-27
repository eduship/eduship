var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ResinSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    manufacturer: {type: String, required: true, max: 100},
    technology: {type: String, required: false, max: 30},
    description: {type: String, required: false, max: 100000},
    viscosity: {type: String, required: false, max: 30},
    hardness: {type: String, required: false, max: 30},
    tensileStrenghtBeforePostProcessing: {type: String, required: false, max: 30},
    tensileStrenghtAfterPostProcessing: {type: String, required: false, max: 30},
    tensileModulus: {type: String, required: false, max: 30},
    elongation: {type: String, required: false, max: 30},
    ashContentAfterBurn: {type: String, required: false, max: 30},
    heatResistance: {type: String, required: false, max: 30},
    storageTemperature: {type: String, required: false, max: 30},
    density: {type: String, required: false, max: 30},
    curingAreaWaveLenght: {type: String, required: false, max: 30},
    affiliatePartnerName1: {type: String, required: false, max: 100},
    affiliateLink1: {type: String, required: false, max: 500},
    affiliatePrice1: {type: Number, required: false, max: 10000},
    affiliatePartnerName2: {type: String, required: false, max: 100},
    affiliateLink2: {type: String, required: false, max: 500},
    affiliatePrice2: {type: Number, required: false, max: 10000},
    affiliatePartnerName3: {type: String, required: false, max: 100},
    affiliateLink3: {type: String, required: false, max: 500},
    affiliatePrice3: {type: Number, required: false, max: 10000},
    rating: {type: Number, required: false},
    updated_date: { type: Date, default: Date.now }
  }
);


/*
// Virtual for resin's URL
ResinSchema
.virtual('url')
.get(function () {
  return '/catalog/resin/' + this._id;
});
*/

//Export model
module.exports = mongoose.model('Resin', ResinSchema);
