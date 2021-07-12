const mongoose = require('../database/index');

const IssueSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    issue_id: {
        type: Number,
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
        required: true
    },
});

const Issue = mongoose.model('Issue', IssueSchema);

module.exports = Issue;