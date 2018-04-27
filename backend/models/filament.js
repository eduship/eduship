var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FilamentSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    brand: {type: String, required: true, max: 100},
    material: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 100000},
    diameter: {type: String, required: true, max: 100},
    density: {type: Number, required: false, max: 100},
    meltingPoint: {type: Number, required: false, max: 1000},
    printTemperature: {type: Number, required: false, max: 1000},
    bedTemperature: {type: Number, required: false, max: 500},
    filamentLenght: {type: Number, required: false, max: 10000},
    diamaterAccuracy: {type: String, required: false, max: 100},
    printSpeed: {type: Number, required: false, max: 1000},
    viscatSolteningTemperature: {type: Number, required: false, max: 1000},
    heatDeflectionTemp: {type: Number, required: false, max: 1000},
    glasTransitionTemperature: {type: Number, required: false, max: 1000},
    flexuralStrength: {type: Number, required: false, max: 100},
    flexuralModulus: {type: Number, required: false, max: 100},
    moldingSchrinkage: {type: Number, required: false, max: 100},
    strechLimit: {type: Number, required: false, max: 1000},
    meltFlowRate190: {type: Number, required: false, max: 1000},
    meltFlowRate230: {type: Number, required: false, max: 1000},
    durometerHardness: {type: String, required: false, max: 100},
    transparancy: {type: Number, required: false, max: 100},
    netWeigth: {type: Number, required: false, max: 10000},
    grossWeight: {type: Number, required: false, max: 10000},
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
  }, {
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true
  }
});

module.exports = mongoose.model('Filament', FilamentSchema);

FilamentSchema.virtual('avgPrice').get(function() {
    var avgPrice = (this.affiliatePrice1 + this.affiliatePrice2 + this.affiliatePrice3) / 3;
    return Math.floor(avgPrice);
});

/*
// Virtual for filament's URL
FilamentSchema
.virtual('url')
.get(function () {
  return '/catalog/filament/' + this._id;
});
*/
