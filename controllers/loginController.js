const { StatusCodes: { OK } } = require('http-status-codes');

const login = async (req, res) => {
  res.status(OK).json({message: 'OK'})
};

module.exports = {
  login
}