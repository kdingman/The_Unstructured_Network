const { Schema, model } = require('mongoose');

// Create the User Collection Model

const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Username is Required',
        unique: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Email Address is Required',
        match: [/.+@.+\..+/, 'Please enter a valid Email Address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

// friendCount Schema -> Retrieves the Total Amount of Users Friends
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Create the User Model using the UserSchema
const User = model('User', UserSchema);

// export the User Model
module.exports = User;