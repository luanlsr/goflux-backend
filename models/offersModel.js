const connect = require('./connection');


const createOffers = async (username, password) =>{
  const db = await connect()
  const result = await db.collection('shippers').insertOne({ username, password })


  return {
    _id: result.insertedId,
    username,
    password,
  };
}

const getOffers = async () => {
  const db = await connect()
  const result = await db.collection('users').find().toArray();
  console.log(result);
  return result
  }

module.exports = { 
  createOffers, 
  getOffers
};
