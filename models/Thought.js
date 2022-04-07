const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Create the Reaction Collection Model

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Please Enter a Reaction to the Thought',
            maxlength: 200
        },
        username: {
            type: String,
            required: 'Please Enter a Username',
            unique: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// Create the Thoughts Collection Model

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Please Enter Your Thoughts',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'Please Enter a Username',
            unique: true
        },
        // use ReactionSchema to validate data for a reaction
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// reactionCount Schema -> Retrieves total Thoughts and Reactions Count
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Create the Thought Model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought Model
module.exports = Thought;