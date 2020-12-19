const mongoose  = require('mongoose');



const Lakes = mongoose.model('Lakes',{
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
    type:{
        type: String
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
module.exports = Lakes