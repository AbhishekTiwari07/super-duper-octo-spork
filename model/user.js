const mongoose = require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

// userSchema.virtual('artowork',{
//     ref:'Image',
//     localField: 'artwork',
//     foreignField: '_id'
// })

const User = mongoose.model('User', userSchema);

module.exports = User;