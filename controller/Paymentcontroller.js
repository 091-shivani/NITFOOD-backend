// import { instance } from "";
const instance = require("../index.js");

const checkout = async (req, res) => {
  const options = {
    amount: 50,
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order);
};

module.export = checkout;
