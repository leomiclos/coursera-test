const jwt = require("jsonwebtoken") 
const dotenv = require("dotenv")

dotenv.config();

 function decodeToken(token) {
    return jwt.verify(token, process.env.TOKEN_SECRET_KEY);
}


 function createToken(user_id, username) {
    return jwt.sign({ user_id, username }, process.env.TOKEN_SECRET_KEY);
}


module.exports = {
    decodeToken,
    createToken
  };
  
  