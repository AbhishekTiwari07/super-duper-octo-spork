const mongoose = require('mongoose');
const { Schema } = mongoose;

const rmSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type:String,
        required: true
    },
    steps: [{
        type: Schema.Types.ObjectId,
        ref: "Step"
    }]
},{
    timestamps: true
});

const RMSuite = mongoose.model('RMSuite', rmSchema);

module.exports = RMSuite;