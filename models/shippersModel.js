const connect = require('./connection');


const createShippers = async ({name, doc, about, active, site}) =>{
  const db = await connect()
  const result = await db.collection('shippers').insertOne({ name, doc, about, active, site })

  return {
    _id: result.insertedId,
    name: result.name,
    doc: result.doc, 
    about: result.about, 
    active: result.active, 
    site: result.site
  };
}

const getShippers = async () => {
  const db = await connect()
  const result = await db.collection('users').find().toArray();
  console.log(result);
  return result
  }

module.exports = { 
  createShippers, 
  getShippers
};
