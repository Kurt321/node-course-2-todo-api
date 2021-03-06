//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    //db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bf165ab800a660a0d463350')
    // }).toArray().then((docs) => {        
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2 ));

    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // }
    // );

    // db.collection('Todos').find().count().then((count) => {        
    //     console.log(`Todos count: ${count}` );

    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // });    

    db.collection('Users').find({name: 'Kurt Vlaeyen'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2 ));

    }, (err) => {
        console.log('Unable to fetch users');
    }
    );

    db.close;
    client.close;
})