import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserSchema  } from "../models/userModel";

const User = mongoose.model( 'User', UserSchema );

export const signup = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        let newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            "message": "Signup wash successfully"
        });

    } catch (error) {
        res.status(500).json({
            "error": error
        });
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.find({ username : req.body.username });

        if (user && user.length > 0) {
            const isVailedPassword = await bcrypt.compare(req.body.password, user[0].password);

            if (isVailedPassword) {
                // generate token
                const token = jwt.sign({
                    username: user[0].username,
                    userId: user[0]._id
                }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                });

                res.status(200).json({
                    "token": token,
                    "message": "Login was successfully"
                });

            } else {
                res.status(500).json({
                    "error": "Authentication fail"
                });
            }

        } else {
            res.status(500).json({
                "error": "Authentication fail"
            });
        }

    } catch (error) {
        res.status(500).json({
            "error": "Authentication fail"
        });
    }
}