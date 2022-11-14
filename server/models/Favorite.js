const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    },
}, {timestamps: true})
//timestamps true를 해주면 입력된 시간을 자동으로 생성해준다.



const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }