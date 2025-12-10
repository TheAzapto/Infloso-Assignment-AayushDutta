import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        if (user.password !== req.body.password) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        req.user = user;
        next();

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}