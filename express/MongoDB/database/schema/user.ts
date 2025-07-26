import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    // _id: mongoose.Types.ObjectId,
    id: Number,
    name: String,
    userName: String,
    email: String,
    address: Object,
    phone: String,
    website: String,
    company: Object,
});

export default userschema;