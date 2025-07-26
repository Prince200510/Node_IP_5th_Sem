import mongoose from "mongoose";
import user from "../schema/user";

const usermodel = mongoose.model('user', user, 'user');

export default usermodel;