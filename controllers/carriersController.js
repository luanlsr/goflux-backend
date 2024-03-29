const { StatusCodes: { OK, CREATED } } = require('http-status-codes');
const rescue = require('express-rescue');

const createCarriers = rescue(async (req, res) => {
  const { name } = req.body;
    const result = await service.createCarriers({ name });
    res.status(CREATED).json(result);
});

const getCarriers = rescue(async (req, res) => {
  const result = await service.getCarriers();
  res.status(OK).json(result);
});

module.exports = {
  createCarriers,
  getCarriers
}