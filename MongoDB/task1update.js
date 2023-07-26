const { MongoClient } = require("mongodb");

// const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true";
const uri = "mongodb://127.0.0.1:27017/";

// Function to connect to the MongoDB database
async function connectToDatabaseU() {
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
        console.log("MISSION 1:");
        // const result1 = await collection.updateMany({}, { $set: { gasAmount: 60 } });
        // console.log(`Documents updated: ${result1.modifiedCount}`);
        //2
        console.log("MISSION 2:");
        // const result2 = await collection.updateMany({"status": "mission"}, { $set: { gasAmount: 35 } });
        // console.log(`Documents updated: ${result2.modifiedCount}`);
        //3
        console.log("MISSION 3:");
        // const result3 = await collection.updateMany({}, { $inc: { gasAmount: 20 } });
        // const result3 = await collection.updateMany({gasAmount:{ $gt: 60 }}, { $set: { gasAmount: 60 } });
        // console.log(`Documents updated: ${result3.modifiedCount}`);
        //4
        console.log("MISSION 4:");
        //const result4 = await collection.updateMany({}, { $rename: { gasAmount: "gasPrecantage" } });
        // const result4 = await collection.updateMany({}, { $mul: { gasPrecantage: 1.6666 } });
        // console.log(`Documents updated: ${result4.modifiedCount}`);
        //5
        console.log("MISSION 5:");
        // const result5 = await collection.updateMany({"status": "mission"}, {$push: {
        //     myArr: {
        //       $each: [
        //         { date: "26-07-2023", price: "50", kind: "tire" }, // Object 1
        //         { date: "26-07-2023", price: "100", kind: "brakes" }  // Object 2
        //       ]
        //     }
        //   }});
        // console.log(`Documents updated: ${result5.modifiedCount}`);
        //6
        console.log("MISSION 6:");
        // const result6 = await collection.updateMany({}, {$pull: {
        //     myArr: {
        //       date: {
        //         $eq: collection.aggregate([{}, { $unwind: "$arrayField" }, { $group: { _id: null, minDate: { $min: "$arrayField.date" } } }]).toArray()[0].minDate
        //       }
        //     }
        //   }});
        // console.log(`Documents updated: ${result6.modifiedCount}`);
        //7
        console.log("MISSION 7:");
        // const result7 = await collection.updateMany({}, {$push: { myArr: { $each: [ ], $sort: {price: -1 } }}});
        // console.log(`Documents updated: ${result7.modifiedCount}`);
        //8
        console.log("MISSION 8:");
        const today = new Date();
    const newDocument = {
        "id": "55373783",
        "type": [
          {
            "kind": "Toyota",
            "manufacturinfD": today.toISOString(),
          }
        ],
        "status": "mission",
        "kilometer": "11805",
        "myArr": [
          {
            "date": "01-07-2021",
            "price": "70",
            "kind": "gear"
          },
          {
            "date": "01-03-2020",
            "price": "50",
            "kind": "tire"
          },
          {
            "date": "26-07-2023",
            "price": "50",
            "kind": "tire"
          },
          {
            "date": "26-07-2023",
            "price": "100",
            "kind": "brakes"
          }
        ],
        "gasPrecantage": 91.66300000000001
      }
    ;

    // Insert the new document into the collection
    const result = await collection.insertOne(newDocument);
        

    } catch (error) {
        console.error("Error:", error);
    } finally {
        // Close the connection when done
        await client.close();
        console.log("Connection closed");
    }
}

// Call the function to start the database connection and perform queries
connectToDatabaseU();

