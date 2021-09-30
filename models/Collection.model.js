const { Schema, model } = require("mongoose");
const postSchema = new Schema(
        {
                products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
                brand: { type: String },
                collectionName: { type: String },
                name: { type: String },
                makeupId: { type: String },
                description: { type: String },
                top3: { type: Number },
                posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
                id: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
                path: [{ type: Array }],
                user: { type: Schema.Types.ObjectId, ref: "User" },
                undertone: { type: String, enum: ['warm', 'cool', 'neutral'] }
        }
);
const Post = model("Post", postSchema);
module.exports = Post;