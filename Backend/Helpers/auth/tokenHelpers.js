const User = require("../../Models/user");

const isTokenIncluded =(req) => {
   
    return (
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    )

}

const getAccessTokenFromHeader = (req) => {

    const authorization = req.headers.authorization

    const access_token = authorization.split(" ")[1]

    return access_token
}

const sendToken = async (user, statusCode, res) => {
    try {
      const token = await User.generateJwtFromUser(user);
  
      return res.status(statusCode).json({
        success: true,
        token
      });
    } catch (error) {
      // Handle any errors that occurred during token generation
      console.error(error);
  
      return res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  };

module.exports ={
    sendToken,
    isTokenIncluded,
    getAccessTokenFromHeader
}
