const connect = require('./connection');


const createCarriers = async ({name, doc, about, active, site}) =>{
  const db = await connect()
  const result = await db.collection('carriers').insertOne({ name, doc, about, active, site })

  return {
    _id: result.insertedId,
    name: result.name,
    doc: result.doc, 
    about: result.about, 
    active: result.active, 
    site: result.site
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
