const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: { type: String, required: true, maxLength: 100 },
  text: { type: String, required: true },
  added: { type: Date },
});

// // Virtual for author's URL
// MessageSchema.virtual("url").get(function () {
//   // We don't use an arrow function as we'll need the this object
//   return `/catalog/author/${this._id}`;
// });

// Export model
module.exports = mongoose.model("Message", MessageSchema);
