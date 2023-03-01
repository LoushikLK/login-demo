import { verifyToken } from "../utils/index.js";

const isAuthenticated = async (req, res, next) => {
  try {
    //get token from header

    const token = req?.headers?.authorization?.split(" ")[1];

    if (!token) throw new Error("User is not authorized");

    //if token found verify token

    const turnToken = await verifyToken(token);

    if (!turnToken) throw new Error("User is not authorized");

    req.user = turnToken;
    next();
  } catch (error) {
    next(error);
  }
};

export { isAuthenticated };
