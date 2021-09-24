const { Schema, model } = require("mongoose");

const postSchema = new Schema(
    {
        products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
        brand: String,
        name: String,
<<<<<<< HEAD
        makeupId: String,
=======
>>>>>>> 79fba95773362819a1d8c8366f8e0c10f66b734b
        description: String,
        user: { type: Schema.Types.ObjectId, ref: "User" },
        undertone: { type: String, enum: ['warm', 'cool', 'neutral'] }
    }
);

const Post = model("Post", postSchema);

module.exports = Post;