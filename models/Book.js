// Import dependencies
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema; 

// Use Schema to create a new BookSchema object
var bookSchema = new Schema({
    // title: String, required
    title: {
        type: String, 
        required: "A title is required."
    }, 
    // authors: Array, required 
    authors: {
        type: String, 
        required: "A title is required."
    }, 
    // description: , required
    description: {
        type: String, 
        required: "A title is required."
    }, 
    // image: String, required
    image: {
        type: String, 
        required: "A title is required."
    }, 
    // link: String, required
    link: {
        type: String, 
        required: "A title is required."
    }, 
});

// Use mongoose's model method to create our Book model from the above schema
var Book = mongoose.model("Book", bookSchema);

// Export the User model
module.exports = Book;