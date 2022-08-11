const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function () {
  mongoose
    .connect(
      `mongodb+srv://Nitish8800:8800@bhumitech.anzew.mongodb.net/userData?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(`Mongodb connected...`))
    .catch((err) => console.log(err))
};
