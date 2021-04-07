const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const frenchBreadSchema = new mongoose.Schema({
  monday: Number,
  tuesday: Number,
  wednesday: Number,
  thursday: Number,
  friday: Number,
  saturday: Number,
  sunday: Number
});

const frenchBread = mongoose.model("frenchBread", frenchBreadSchema);

module.exports = {
  model: frenchBread,
  schema: frenchBreadSchema
};
