const mongoose = require('../database/index');

const IssueSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    labels: [{
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    }],
    created_at: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    }
});

const Issue = mongoose.model('Issue', IssueSchema);

module.exports = Issue;