import {Router} from 'express';
import { middleWareWrapper } from '../tools';
// import { usermodel } from '../MongoDB/database';
import usermodel from '../MongoDB/database/model/user';

const userrouter = Router();

userrouter.get('/', middleWareWrapper(async (req : Request, res : Response) => {
    const user = await usermodel.find({});
    console.log("users from DB:", user);
    res.send(user);
}));

userrouter.post('/insert', middleWareWrapper(async (req : Request, res : Response) => {
    const newuser = new usermodel(req.body);
    await newuser.save();
    res.status(201).send(newuser);
}));

userrouter.get('/:userid', middleWareWrapper(async (req : Request, res : Response) => {
    const userid = req.params.userid;
    const userdata = await usermodel.findOne({id: userid});
    res.send(userdata);
}));

userrouter.put('/:userid', middleWareWrapper(async (req : Request, res : Response) => {
    const userid = req.params.userid;
    const datatoupdate =  req.body;
    const updateduser = await usermodel.findOneAndUpdate({id: userid}, req.body, { new: true });    
    res.send(updateduser);
}));

userrouter.delete('/delete/:userid', middleWareWrapper(async (req : Request, res : Response) => {
    const userid = req.params.userid;
    const deleteduser = await usermodel.findOneAndDelete({id: userid});
    res.send(deleteduser);
}));

export default userrouter;