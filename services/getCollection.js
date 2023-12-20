const { MongoClient } = require("mongodb");

export const getCollection = async () => {
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db(process.env.DB); // Choose a name for your database
    const collection = database.collection(process.env.COLLECTION); // Choose a name for your collection
    const result = await collection.findOne({});
    return result;
  } catch (error) {
    return new Error("Failed to fetch from DB");
  }
};
