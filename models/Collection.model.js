const { Schema, model } = require("mongoose");
const postSchema = new Schema(
        {
                products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
                brand: { type: String },
                collectionName: { type: String },
                name: { type: String },

                name2: { type: String },
                name3: { type: String },
                makeupId: { type: String },
                description: { type: String },
                top3: { type: Number },
                // img: { type: String, enum: ['https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-serum-foundation-30-r-30ml.png?v=6ab9fcb8ca2abb9828afcf9dcdad9f94","product_link":"https://deciem.com/product/rdn-serum-foundation-30-r-30ml'] },


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