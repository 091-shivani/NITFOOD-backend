// import { instance } from "";
const instance = require("../index.js");

const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount*100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  res.status(200).json({
    success:true,
    order,
  });
};

module.export = checkout;
