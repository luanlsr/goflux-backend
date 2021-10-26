const model = require('../models/bidsModel');

const createBid = async (username, password) => {
  const created = model.createBid(username, password)
  return created;
};

const getBids = async () => {
  const result = model.getBids();
  return result;
}

module.exports = {
  createBid,
  getBids
}