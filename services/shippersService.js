const model = require('../models/bidsModel');

const createShippers = async (data) => {
  const created = model.createShippers(data)
  return created;
};

const getShippers = async () => {
  const result = model.getShippers();
  return result;
}

module.exports = {
  createShippers,
  getShippers
}