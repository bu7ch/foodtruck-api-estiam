const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodtruckSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  phone: { type: Number, min:3 },
  speciality: { type: String },
  createdAt: { type: Date, default: Date.now() },
});
const Foodtruck = mongoose.model('Foodtruck', FoodtruckSchema)
module.exports = Foodtruck;