import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    //get token from header
    const token = req.header("Authorization").split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.body.userId = decryptedToken.userId;
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

