const connect = require('./connection');


const createCarriers = async (username, password) =>{
  const db = await connect()
  const result = await db.collection('shippers').insertOne({ username, password })


  return {
    _id: result.insertedId,
    username,
    password,
  };
}

const getCarriers = async () => {
  const db = await connect()
  const result = await db.collection('users').find().toArray();
  console.log(result);
  return result
  }

module.exports = { 
  createCarriers, 
  getCarriers
};
