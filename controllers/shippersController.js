const { StatusCodes: { OK, CREATED } } = require('http-status-codes');
const rescue = require('express-rescue');

const createShippers = rescue(async (req, res) => {
  const result = await service.createShippers(req.body);
  res.status(CREATED).json(result);
});

const getShippers = rescue(async (req, res) => {
  const result = await service.getShippers();
  res.status(OK).json(result);
});

module.exports = {
  createShippers,
  getShippers
}