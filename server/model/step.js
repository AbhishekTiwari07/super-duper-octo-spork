const mongoose = require('mongoose');
const { Schema } = mongoose;

const stepSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    description: String,
    type: String,
    
    steps: {
        type: Schema.Type.ObjectId,
        ref: "RMSuite"
    }
},{
    timestamps: true
});

const Step = mongoose.model('Step', stepSchema);

module.exports = Step;