
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/login/userModel.js';

const router = express.Router();

// middleware for this routes
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Token is missing." });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token." });
        }

        req.user = user; // Attach user information to the request object
        next();
    });
};
// router.use(authenticateToken)

// Handling post request
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const email = 'shamim@gmail.com';
    const SECRET_KEY = process.env.JWT_SECRET;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "Invalid username or password." });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid username or password." });
    }

    // Generate JWT
    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});


router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name: 'shamim reza',
        email: 'shamim@gmail.com',
        username: 'shamim901',
        password: hashedPassword // Note: Never store passwords in plain text!
    });

    const savedUser = await newUser.save();
    console.log('User created:', savedUser);

    // Check if user already exists
    // const userExists = users.find(user => user.username === username);
    // if (userExists) {
    //     return res.status(400).json({ message: "User already exists." });
    // }

    // Hash the password

    // Save the user
    // users.push({ username, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully." });
});



export default router;