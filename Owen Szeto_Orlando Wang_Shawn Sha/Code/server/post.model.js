const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Post = new Schema({
    title: {
        type: String
    },
    ImageURL: {
        type: String
    },
    Estate: {
        type: String
    },
    Bedrooms: {
        type: Number,
        min: 1
    },
    GrossArea: {
        type: Number,
        min: 1
    },
    ExpectedTenants: {
        type: Number,
        min: 1
    },
    Rent: {
        type: Number,
        min: 1
    },
    Updated: {
        type: Date, default: Date.now
    },
    Created: {
        type: Date, default: Date.now
    },
    Highlighted: {
        type: Boolean, default: false
    }
}, {
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);
