import { MongoClient } from "mongodb";
import { MONGODB_URI } from '../Env'

console.log({ MONGODB_URI });

const client = new MongoClient(MONGODB_URI//, 
//   {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// }
);


async function fetchData() {
  try {
    await client.connect();
    const db = client.db('sample_mflix');
    const collection = db.collection('comments');
    const data = await collection.find({}).toArray();
    console.log(data);
  } finally {
    await client.close();
  }
}

fetchData().catch(console.error);