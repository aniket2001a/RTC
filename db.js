function dbConnect() {
    // Db connection
const mongoose = require('mongoose')
// const url = 'mongodb://localhost/comments'
const url = 'mongodb+srv://botar16649:nhM8J07y1K08U9oY@cluster0.mytorqz.mongodb.net/RTC-db?retryWrites=true&w=majority'

mongoose.connect(url, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const connection = mongoose.connection
connection.once('open', function() {
    console.log('Database connected...')
}).catch(function(err){
    console.log('Connection failed...')
})
}

module.exports = dbConnect
