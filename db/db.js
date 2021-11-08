const mongoose = require("mongoose");
var config =require ('../config');
module.exports = async function (url) {
  try {
    mongoose.connect(process.env.MONGODB_URL ||'mongodb+srv://dbUser:Captain@chat.e0iu1.mongodb.net/chat?retryWrites=true&w=majority');
const mongodbUrl = config.MONGODB_URL;
mongoose .connect(mongodbUrl, {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    
  })
   .catch((error) => console.log(error.reason));
    
    console.info("Connected to Probook DB");
  } catch (error) {
    console.error("Something went wrong", error);
  }
};
