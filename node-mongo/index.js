const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operation');

const url = 'mongodb://127.0.0.1:27017/';
const dbname = 'conFusion';
/*MongoClient.connect(url,(err,client)=>{
    const db = client.db(dbname);
    dboper.insertDocuments(db, { name: "Vadonut", description: "Test"},
        "dishes", (result) => {
            console.log("Insert Document:\n", result.ops);

            dboper.findDocuments(db, "dishes", (docs) => {
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes",
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dboper.findDocuments(db, "dishes", (docs) => {
                            console.log("Found Updated Documents:\n", docs);
                            
                            db.dropCollection("dishes", (result) => {
                                console.log("Dropped Collection: ", result);

                                client.close();
                            });
                        });
                    });
            });
    });
});*/
MongoClient.connect(url,(err,client)=>{
    const db = client.db(dbname);
    dboper.insertDocuments(db, {"name":"jalebi","description":"test jalebi"},"dishes")
        .then((result)=>{
            console.log("Insert Document:\n", result.ops);
            return dboper.findDocuments(db, "dishes");
        })
        .then((docs)=>{
            console.log("Found Documents:\n", docs);
            return dboper.updateDocument(db, { name: "jalebi" }, { description: "Updated Test" }, "dishes");
        }) 
        .then((result)=>{
            console.log("Updated Document:\n", result.result);
            return dboper.findDocuments(db, "dishes" );
        })
        .then((docs)=>{
            console.log('Found the update documents: ', docs);
            return db.dropCollection("dishes");
        })
        .then((result)=>{
            console.log("Dropped Collection: ", result);
            return client.close();
        })
        .catch((err) => console.log(err));
    });





    /*console.log('Connected correctly to the Server');
    const db = client.db(dbname);
    const collection = db.collection("dishes");
    collection.insertOne({"name": "Uthappizza", "description": "test"},(err,result)=>{
        assert.equal(err,null);

        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);

            console.log("Found:\n");
            console.log(docs);

            db.dropCollection('dishes',(err,result)=>{
                assert.equal(err,null);
                client.close();
            });
        });
    });
});
*/