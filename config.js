var dotenv =require('dotenv');

dotenv.config();

module.exports={
    PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://dbUser:Captain@chat.e0iu1.mongodb.net/chat?retryWrites=true&w=majority',
  

};

