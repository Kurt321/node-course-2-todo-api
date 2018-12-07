//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
 

    //zie ook https://docs.mongodb.com/manual/reference/operator/update/
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c0a349fefde9cc24cb63aff')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })
 
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bf16a31b8603532c8095dc7')
    }, {
        $set: {
            name: 'Kurt Vlaeyen'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })


    // db.close;
    // client.close;
})