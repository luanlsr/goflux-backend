const model = require('../models/bidsModel');

const createShippers = async (username, password) => {
  const created = model.createShippers(username, password)
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