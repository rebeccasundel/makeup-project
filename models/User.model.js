const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  name: { type: String },

  username: {
    type: String,
    unique: [true, "Username is already taken"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email is already registered"],
    match: [
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      "Please enter a valid email",
    ],
  },
  password: { type: String },
  friendCode: {
    type: String,
    match: [
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      "Please enter a valid email",
    ],

  }, favoriteProduct: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }],

  undertone: {
    type: String,
    match: ["cool", "neutral", "warm"],
  },

  collections: [{ type: Schema.Types.ObjectId, ref: "Collection" }]
});

const User = model("User", userSchema);

module.exports = User;