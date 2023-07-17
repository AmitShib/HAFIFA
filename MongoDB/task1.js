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

        //1

        console.log(await collection.findOne({ id: "55373221" }));
        //2
        console.log(await collection.find({ status: "mission" }).project({ _id: 0, id: 1 }).toArray());
        //3
        console.log(await collection.find({ status: { $ne: "mission" } }).project({ _id: 0, id: 1 }).toArray());
        //4
        console.log(await collection.find({}).sort({ date: 1 }).limit(3));
        //5
        console.log(await collection.aggregate([{ $sort: { date: -1 } }, { $limit: 3 }]).toArray());
        //6
        //7
        //8

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

