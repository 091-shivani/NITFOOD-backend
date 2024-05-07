const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
// const checkout = require("../controller/Paymentcontroller.js");

const instance = new Razorpay({
  key_id: "rzp_test_ECnWPOQP1K3WYM",
  key_secret: "x3u8TK6Ao4kGQMWwTOSKcW79",
});

router.post("/checkout", async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  try {
    const order = await instance.orders.create(options);

    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/paymentverification", async (req, res) => {
  console.log(req.body);
  res.status(200).json({ success: true });
});

module.exports = router;
