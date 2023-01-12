const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantsSchema = new Schema({
    plant_name: {
        type: String,
        required: true
    },
    date_adopted: {
        type: String,
        required: true
    },
    watering: {
        type: String,
        required: true
    },
    sunlight: {
        type: String,
        required: true
    },
    additional_notes: {
        type: String,
        required: true
    }
});

const Plants = mongoose.model('Plants', plantsSchema);

module.exports = {
    Plants
};
