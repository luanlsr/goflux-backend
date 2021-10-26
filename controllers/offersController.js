const { StatusCodes: { OK, CREATED } } = require('http-status-codes');

const createOffers = async (req, res) => {
  const { name } = req.body;
    const result = await service.createOffers({ name });
    res.status(CREATED).json(result);
};

const getOffers = async (req, res) => {
  const result = await service.getOffers();
  res.status(OK).json(result);
};

module.exports = {
  createOffers,
  getOffers
}