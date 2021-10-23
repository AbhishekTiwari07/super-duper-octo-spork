const mongoose = require('mongoose');
const { Schema } = mongoose;

const rmSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    steps: [{
        type: Schema.Type.ObjectId,
        ref: "Step"
    }]
},{
    timestamps: true
});

const RMSuite = mongoose.model('RMSuite', rmSchema);

module.exports = RMSuite;