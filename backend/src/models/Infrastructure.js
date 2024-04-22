const mongoose = require('mongoose');

const infrastructureSchema = new mongoose.Schema({
    designation: {
        type:String, 
        required: true, 
        unique: true
    },
    funcional: { 
        type: Number, 
        required: false 
    },
    nao_funcional: { 
        type: Number, 
        required: false 
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        required: true
    },
    total: { 
        type: Number, 
        required: true 
    },


},{timestamps: true});

const Infrastructure = mongoose.model('Infrastructure', infrastructureSchema);

module.exports = Infrastructure;