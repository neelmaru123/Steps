const mongooes = require('mongoose');

const schema = mongooes.Schema({
        FacultyID : Number,
        FacultyName: String,
        FacultyInitial: String
}, { collection : "Faculty"});

module.exports = mongooes.model('Faculty',schema)