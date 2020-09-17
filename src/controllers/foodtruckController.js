const Foodtruck = require("../models/foodtruck");
// optionnel la validation
// const faketrucks = [
//   {
//     name: "foo",
//     address: "45 Av. des mimosas",
//     phone: 3332222,
//     speciality: "burger",
//   },
//   {
//     name: "bar",
//     address: "23 Av. des poulpes",
//     phone: 4568970,
//     speciality: "thaï",
//   },
// ];
exports.show = async (req, res, next) => {
  try {
    const foodtruck = await Foodtruck.findOne({ _id: req.params.id });
    res.json(foodtruck);
  } catch (error) {
    next(error);
  }
};
exports.all = async (req, res, next) => {
  try {
    const foodtrucks = await Foodtruck.find({});
    res.render("foodtrucks", { foodtrucks: foodtrucks });
  } catch (error) {
    next(error);
  }
};
exports.store = async (req, res, next) => {
  try {
    let foodtruck = new Foodtruck(req.body);
    foodtruck = await foodtruck.save();
    res.json(foodtruck);
  } catch (error) {
    next(error);
  }
};
