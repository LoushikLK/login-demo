import { body } from "express-validator";
import { userModel } from "../model/user.model.js";
import { createHash, createToken, verifyHash } from "../utils/index.js";

const registerUser = async (req, res, next) => {
  try {
    //validate error here

    const { username, email, phoneNumber, country, address, password } =
      req?.body;

    //first hash a password

    const hashPassword = createHash(password);

    //create user using user module

    const createUser = await userModel.create({
      username,
      email,
      phoneNumber,
      country,
      address,
      password: hashPassword,
    });

    //if create failed throw an error

    if (!createUser) throw new Error("User creation failed");

    res.json({
      status: "success",
      message: "User created successfully",
      data: {
        data: createUser,
      },
    });
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req, res, next) => {
  try {
    //validate error here

    const { email, password } = req?.body;

    //find a user with the mail

    const user = await userModel.findOne({
      email,
    });

    //if user doesnot exist throws an error

    if (!user) throw new Error("User credential invalid");

    //verify hash

    const passwordCorrect = verifyHash(user?.password, password);

    //if password is incorrect throws an error

    if (!passwordCorrect) throw new Error("User credential invalid");

    //create a token

    const token = await createToken({
      _id: user?._id,
      email: user?.email,
      username: user?.username,
    });

    res.json({
      status: "success",
      message: "User logged in successfully",
      data: {
        token: token,
        data: {
          _id: user?._id,
          email: user?.email,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
const getUserSelf = async (req, res, next) => {
  try {
    //find a user with the id

    const user = await userModel.findById(req?.user?._id);

    //if user doesnot exist throws an error

    if (!user) throw new Error("User not found");

    res.json({
      status: "success",
      message: "User data fetched in successfully",
      data: {
        data: user,
      },
    });
  } catch (error) {
    next(error);
  }
};

const authController = {
  registerUser,
  loginUser,
  getUserSelf,
};

export default authController;

const registerValidation = [
  body("username").not().isEmpty().withMessage("username is required"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("provide a valid email"),
  body("phoneNumber").not().isEmpty().withMessage("phoneNumber is required"),
  body("country").not().isEmpty().withMessage("country is required"),
  body("password").not().isEmpty().withMessage("password is required"),
];
const loginValidation = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("provide a valid email"),
  body("password").not().isEmpty().withMessage("password is required"),
];

export { registerValidation, loginValidation };
