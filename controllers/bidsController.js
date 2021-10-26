const { StatusCodes: { OK } } = require('http-status-codes');

const createBids = async (req, res) => {
  const { name } = req.body;
  const result = await service.createBids({ name });
  res.status(CREATED).json(result);
};

const getBids = async (req, res) => {
  const result = await service.getBids();
  res.status(OK).json(result);
};

module.exports = {
  createBids,
  getBids
}