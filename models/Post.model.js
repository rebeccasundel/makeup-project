const { Schema, model } = require("mongoose");

const postSchema = new Schema(
    {
        collection: { type: Schema.Types.ObjectId, ref: "Collection" },
        brand: String,
        name: String,
        description: [{ type: Schema.Types.ObjectId, ref: "Description" }]
    }
);

const Post = model("Post", postSchema);

module.exports = Post;