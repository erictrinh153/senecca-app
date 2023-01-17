const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const fileUpload = require('./routes/fileupload');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
dotenv.config();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, options)
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log("Error Handler", err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/files", fileUpload);

app.listen(8800, () => {
  console.log("listening on 8800");
});
