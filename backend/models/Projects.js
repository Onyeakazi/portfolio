const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }, 

    github: {
        type: String,
        required: true
    }, 

    project: {
        type: String,
        required: true
    },

    stack: [{
        type: String,
        required: true
    }]
}, {timestamps: true});

module.exports = mongoose.model('Projects', ProjectSchema);