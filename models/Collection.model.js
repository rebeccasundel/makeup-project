const { Schema, model } = require("mongoose");
const postSchema = new Schema(
    {
        products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
        brand: String,
        collectionName: String,
        name: String,
        makeupId: String,
        description: String,
        top3: Number,
        imageUrl: { type: String },
        user: { type: Schema.Types.ObjectId, ref: "User" },
        undertone: { type: String, enum: ['warm', 'cool', 'neutral'] }
    }
);
const Post = model("Post", postSchema);
module.exports = Post;