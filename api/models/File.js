
const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    hashCode: { type: String, required: true, unique: true },
    ownerId: { type: mongoose.Types.ObjectId, ref: "User"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("FileSchema", FileSchema);
