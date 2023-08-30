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