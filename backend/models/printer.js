var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PrinterSchema = new Schema(
  {
    model: {type: String, required: true, max: 100},
    brand: {type: String, required: true, max: 100},
    type: {type: String, required: false, max: 100},
    rating: {type: String, required: false, max: 10},
    description: {type: String, required: false, max: 100000},
    material: {type: String, required: false, max: 100},
    autoCalibration: {type: String, required: false, max: 5},
    heatedBed: {type: String, required: false, max: 5},
    thirdPartyMaterial: {type: String, required: false, max: 5},
    dualExtruder: {type: String, required: false, max: 5},
    camera: {type: String, required: false, max: 5},
    lcdDisplay: {type: String, required: false, max: 5},
    sdCard: {type: String, required: false, max: 10},
    touchScreen: {type: String, required: false, max: 5},
    usbPort: {type: String, required: false, max: 5},
    hdmi: {type: String, required: false, max: 5},
    wlan: {type: String, required: false, max: 5},
    buildspaceWidth: {type: String, required: false, max: 5},
    buildspaceLenght: {type: String, required: false, max: 5},
    buildspaceHight: {type: String, required: false, max: 5},
    maxNozzleTemp: {type: String, required: false, max: 20},
    maxBedTemp: {type: String, required: false, max: 20},
    maxBuildspaceTemp: {type: String, required: false, max: 20},
    maxFeedrate: {type: String, required: false, max: 50},
    layerThickness: {type: String, required: false, max: 50},
    nozzleDiameter: {type: String, required: false, max: 50},
    weight: {type: String, required: false, max: 50},
    os: {type: String, required: false, max: 100},
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
  },
  {
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true
  }
});



/*
// Virtual for printers's URL
PrinterSchema
.virtual('url')
.get(function () {
  return '/catalog/printer/' + this._id;
});
*/

//Export model
module.exports = mongoose.model('Printer', PrinterSchema);

PrinterSchema.virtual('avgPrice').get(function() {
    var avgPrice = (this.affiliatePrice1 + this.affiliatePrice2 + this.affiliatePrice3) / 3;
    return Math.floor(avgPrice);
});
