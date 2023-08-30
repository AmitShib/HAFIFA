//1
db.getCollection("vehichles").aggregate(
    [
      { "$match": { status: "mission" } }, 
      { "$addFields": 
        { "totalPrices": { $reduce: {input:"$myArr", initialValue:0, in:{$add: ["$$value",{$toInt:"$$this.price"}]}} } } },
      { "$match": {"totalPrices": { "$gt": 270 } }}
    ]
  );

  //2
  db.getCollection("vehichles").aggregate([
    {
      $unwind: "$myArr"
    },
    {
      $match: {
        "myArr.kind": "oil"
      }
    },
    {
      $group: {
        _id: null,
        oilObjects: {
          $push: "$myArr"
        }
      }
    }
  ])

  //3
  db.getCollection("vehichles").aggregate([
    {
      $unwind: "$type"
    },
    {
      $group: {
        _id: "$type.kind",
        oldestVehicle: {
          $min: "$_id"
        },
        newestVehicle: {
          $max: "$_id"
        }
      }
    },
    {
      $project: {
        kind: "$_id",
        oldestVehicle: 1,
        newestVehicle: 1,
        _id: 0
      }
    }
  ])

  //4
  db.getCollection("vehichles").aggregate([
    {
      $addFields: {
        manufacturingYear: { $year: { $toDate: "$type.manufacturinfD" } },
        manufacturingMonth: { $month: { $toDate: "$type.manufacturinfD" } }
      }
    },
    {
      $match: {
        $or: [
          { manufacturingMonth: 7 },
          { manufacturingMonth: 8 }
        ]
      }
    },
    {
      $project: {
        _id: 0,
        id: 1,
        manufacturingYear: 1
      }
    }
  ])