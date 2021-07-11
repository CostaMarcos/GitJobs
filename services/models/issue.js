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
});

const Issue = mongoose.model('Issue', IssueSchema);

module.exports = Issue;