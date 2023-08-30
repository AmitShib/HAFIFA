const { MongoClient } = require("mongodb");
const fs = require("fs");

// Replace the connection string with your MongoDB URI
const uri = "mongodb://127.0.0.1:27017/";

// Function to connect to the MongoDB database and load documents
async function loadJsonFileToCollection() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log("Connected to the database");

    // Use the desired database and collection names
    const database = client.db("test");
    const collection = database.collection("people");

    // Read the JSON file
    const textFilePath = "C:\\Users\\Noa Dunitza\\Desktop\\MongoDB\\‏‏people_example1.json";
    const data = fs.readFileSync(textFilePath, "utf8");
    const documents = data.split("\n").filter(line => line.trim() !== "");

    // Parse and insert each document into the collection
    for (const doc of documents) {
      try {
        const parsedDoc = JSON.parse(doc);
        await collection.insertOne(parsedDoc);
      } catch (error) {
        console.error("Error parsing document:", error);
      }
    }

    console.log(`Documents inserted: ${documents.length}`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection when done
    await client.close();
    console.log("Connection closed");
  }
}

// Call the function to start the database connection and insert documents
loadJsonFileToCollection();
