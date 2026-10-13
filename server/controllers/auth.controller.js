import genToken from "../config/token.js";
import User from "../models/user.model.js";


// ==============================
// GOOGLE LOGIN
// ==============================
export const googleAuth = async (req, res) => {
    try {
        console.log("GOOGLE AUTH REQUEST RECEIVED");
        console.log("Request body:", req.body);

        const { name, email } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });

        // Create new user if not found
        if (!user) {
            console.log("Creating new user...");

            user = await User.create({
                name,
                email
            });
        }

        console.log("User found/created:", user._id);

        // Generate JWT token
        const token = await genToken(user._id);

        console.log("Token generated successfully");

        // Store token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        console.log("Google authentication successful");

        return res.status(200).json(user);

    } catch (error) {

        console.error("GOOGLE AUTH ERROR:", error);

        return res.status(500).json({
            message: `Google auth error: ${error.message}`
        });
    }
};


// ==============================
// LOGOUT
// ==============================
export const logOut = async (req, res) => {
    try {

        res.clearCookie("token");

        return res.status(200).json({
            message: "Logout Successfully"
        });

    } catch (error) {

        console.error("LOGOUT ERROR:", error);

        return res.status(500).json({
            message: `Logout error: ${error.message}`
        });
    }
};