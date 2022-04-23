import mongoose from "mongoose";
import { UserSchema  } from "../models/userModel";

const User = mongoose.model( 'User', UserSchema );

export const signup = (req, res) => {
    res.send('SIGNUP POST REQUEST FROM CONTROLLER');
}

export const login = (req, res) => {
    res.send('LOGIN POST REQUEST FROM CONTROLLER');
}