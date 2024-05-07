const mongoose = require("mongoose");
const mongoURI =
  "mongodb://finalproject:Universe123@ac-oqtujjg-shard-00-00.jdcybth.mongodb.net:27017,ac-oqtujjg-shard-00-01.jdcybth.mongodb.net:27017,ac-oqtujjg-shard-00-02.jdcybth.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-10jn81-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoURL = "mongodb://localhost:27017/test";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetchedData = mongoose.connection.db.collection("foodItems");
    console.log(fetchedData);
    fetchedData.find({}).toArray(function (err, data) {
      const foodCategory = mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(function (err, catData) {
        if (err) console.log(err);
        else {
          global.foodItems = data;
          global.foodCategory = catData;
        }
      });
      //   if (err) console.log(err);
      //   else{
      //         global.foodItems = data;
      //   }
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

module.exports = { mongoose, mongoDB };
