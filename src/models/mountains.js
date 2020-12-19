const mongoose  = require('mongoose');


const Mountains = mongoose.model('Mountains',{
    title:{
        type:String
    },
    subtitle: {
        type: String
    },
    rating: {
        type: Number
    },
    reviewCount: {
        type: Number
    },
    category:{
        type: String
    },
    imgUrl:{
        type: String
    },
    description:{
        type: String
    },
    height:{
        type: Number
    },
    latitude:{
        type: Number
    },
    longitude:{
        type: Number
    },
    timestamp: {
        type: String
    }

})

module.exports = Mountains