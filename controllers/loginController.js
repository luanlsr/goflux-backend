const { StatusCodes: { OK } } = require('http-status-codes');
const rescue = require('express-rescue');

const login = rescue(async (req, res) => {
  res.status(OK).json({message: 'OK'})
});

module.exports = {
  login
}