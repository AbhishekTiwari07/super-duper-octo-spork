const mongoose = require('mongoose');
const { Schema } = mongoose;

const stepSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    description: String,
    type: String,
    
    suite: {
        type: Schema.Types.ObjectId,
        ref: "RMSuite"
    }
},{
    timestamps: true
});

const Step = mongoose.model('Step', stepSchema);

module.exports = Step;