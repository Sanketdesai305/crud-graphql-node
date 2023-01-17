import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI)
mongoose.connection.on("error", function (error) {
    console.log(error)
})

mongoose.connection.on("open", function () {
    console.log("Connected to MongoDB database.")
})
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:String,
        required:true
    },
    married:{
        type:Boolean,
        required:true
    }
});
const Contacts = mongoose.model('contacts',userSchema);
export {Contacts} 