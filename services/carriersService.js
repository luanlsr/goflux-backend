const model = require('../models/bidsModel');

const createCarriers = async (username, password) => {
  const created = model.createCarriers(username, password)
  return created;
};

const getCarriers = async () => {
  const result = model.getCarriers();
  return result;
}

module.exports = {
  createCarriers,
  getCarriers
}