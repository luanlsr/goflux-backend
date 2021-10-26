const { StatusCodes: { OK, CREATED } } = require('http-status-codes');

const createShippers = async (req, res) => {
  const { name } = req.body;
  const result = await service.createShippers({ name });
  res.status(CREATED).json(result);
};

const getShippers = async (req, res) => {
  const result = await service.getShippers();
  res.status(OK).json(result);
};

module.exports = {
  createShippers,
  getShippers
}