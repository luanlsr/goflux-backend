const model = require('../models/bidsModel');

const createOffers = async (username, password) => {
  const created = model.createOffers(username, password)
  return created;
};

const getOffers = async () => {
  const result = model.getOffers();
  return result;
}

module.exports = {
  createOffers,
  getOffers
}