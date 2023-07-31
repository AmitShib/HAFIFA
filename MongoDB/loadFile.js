const fs = require("fs");
const { MongoClient } = require("mongodb");

// Replace the connection string with your MongoDB URI
const uri = "mongodb://127.0.0.1:27017/";

// Function to read the text file and insert data into a new collection
async function loadTextFileToCollection() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log("Connected to the database");

    // Use the desired database and define the new collection name
    const database = client.db("test");
    const peopleCollection = database.collection("people");

    // Read the text file and parse its content into an array of documents
    const textFilePath = "C:/Users/Noa Dunitza/Desktop/MongoDB/people_example.txt"; // Replace with the path to your text file
    const data = fs.readFileSync(textFilePath, "utf8");
   // const documents = data.split("\n").map((line) => JSON.parse(line));
   //const documents = data.split("\n").filter(line => line.trim() !== "");
    

    // Create the new collection and insert the data
    // const collection = database.collection(peopleCollection);
    // const result = await collection.insertMany(documents);

    // Parse and insert each document into the collection
    // Use regex to match each JSON document in the text file
    const regex = /{[^{}]*}/g;
    const documents = data.match(regex);

    // Parse and insert each document into the collection
    for (const doc of documents) {
      try {
        const parsedDoc = JSON.parse(doc);
        await peopleCollection.insertOne(parsedDoc);
      } catch (error) {
        console.error("Error parsing document:", error);
      }
    }

    console.log(`Documents inserted: ${result.insertedCount}`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection when done
    await client.close();
    console.log("Connection closed");
  }
}

// Call the function to start the database connection and load the data
loadTextFileToCollection();
