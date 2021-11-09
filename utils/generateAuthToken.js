const jwt = require("jsonwebtoken");
const privateKey = 'captain';

const generateAuthToken = function (id) {
  const token = jwt.sign(
    {
      _id: id,
    },
    privateKey,
    { expiresIn: "24h" }
  );

  return token;
};

module.exports = generateAuthToken;