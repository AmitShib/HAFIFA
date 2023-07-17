// import {MongoClient} from 'mongodb';

// MongoClient.connect('mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true',
// async (err, client)=>{
//     if(err) throw err;
//     console.log('connected to mongoDB succsessfully');
// })

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

// Function to connect to the MongoDB database
async function connectToDatabase() {
    console.log("here");
  const client = new MongoClient(uri);
  
  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log("Connected to the database");

    // Use the desired database and collection
    const database = client.db("test");
    const collection = database.collection("vehichles");

    // Perform your queries here
    // Example: Find a document with a specific value
    const result = await collection.findOne({id: "55373221"});
    console.log("Found document:", result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection when done
    await client.close();
    console.log("Connection closed");
  }
}

// Call the function to start the database connection and perform queries
connectToDatabase();

