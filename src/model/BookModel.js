const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Library", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const Schema = mongoose.Schema;
 //Part #2 Point 9  
const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;