var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ScannerSchema = new Schema(
  {
    model: {type: String, required: true, max: 100},
    manufacturer: {type: String, required: true, max: 100},
    technology: {type: String, required: true, max: 100},
    categorie: {type: String, required: false, max: 100},
    description: {type: String, required: false, max: 100000},
    maxResulution: {type: String, required: false, max: 10},
    minScanSize: {type: String, required: false, max: 10},
    maxScanSize: {type: String, required: false, max: 10},
    maxScanSpeed: {type: String, required: false, max: 10},
    maxScanResolution: {type: String, required: false, max: 10},
    pointDistance: {type: String, required: false, max: 10},
    textureCapture: {type: String, required: false, max: 10},
    automized3dScan: {type: String, required: false, max: 10},
    ThreeDHandScan: {type: String, required: false, max: 10},
    fixed3dScan: {type: String, required: false, max: 10},
    marker: {type: String, required: false, max: 10},
    ThreeDScanDaylight: {type: String, required: false, max: 10},
    fieldOfViewLength: {type: String, required: false, max: 10},
    outputFilesPrinted: {type: String, required: false, max: 10},
    stl: {type: String, required: false, max: 10},
    obj: {type: String, required: false, max: 10},
    asc: {type: String, required: false, max: 10},
    ply: {type: String, required: false, max: 10},
    turntableCapacity: {type: String, required: false, max: 10},
    scanHead: {type: String, required: false, max: 10},
    weight: {type: String, required: false, max: 10},
    os: {type: String, required: false, max: 10},
    gpuDesktop: {type: String, required: false, max: 10},
    gpuDisplayKart: {type: String, required: false, max: 10},
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
// Virtual for scanner's URL
ScannerSchema
.virtual('url')
.get(function () {
  return '/catalog/scanner/' + this._id;
});
*/

//Export model
module.exports = mongoose.model('Scanner', ScannerSchema);
