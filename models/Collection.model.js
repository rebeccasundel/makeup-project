const { Schema, model } = require("mongoose");

const postSchema = new Schema(
    {
        products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
        brand: String,
        name: String,
        description: String,
        user: { type: Schema.Types.ObjectId, ref: "User" },
        undertone: { type: String, enum: ['warm', 'cool', 'neutral'] }
    }
);

const Post = model("Post", postSchema);

module.exports = Post;