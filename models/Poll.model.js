const { Schema, model } = require("mongoose");

const pollSchema = new Schema(
    {
        undertone: { type: String, enum: ['warm', 'cool', 'neutral'] },
        voteUndertone: Number,
    }
);

const Poll = model("Poll", pollSchema);

module.exports = Poll;