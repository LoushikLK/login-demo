import crypto from "crypto";
import jwt from "jsonwebtoken";

//create a hash

const createHash = (text) => {
  return crypto.createHash("sha256", 10).update(text).digest("hex");
};

//verify hash

const verifyHash = (hash, text) => {
  return crypto.createHash("sha256", 10).update(text).digest("hex") === hash;
};

const createToken = async (data) => {
  try {
    const token = await jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    if (!token) throw new Error("token creation failed");

    return token;
  } catch (error) {
    return error;
  }
};
const verifyToken = async (token) => {
  try {
    const verifiedToken = await jwt.verify(token, process.env.JWT_SECRET);

    if (!verifiedToken) throw new Error("token is invalid");

    return verifiedToken;
  } catch (error) {
    return error;
  }
};

export { createHash, verifyHash, createToken, verifyToken };
