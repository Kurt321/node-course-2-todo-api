const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c0a64e4f530343cb891dd06';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos); //returns an array, empty array if not founf
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo); //returns an object, null if not found
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo); //returns an object, null if not found
// }).catch((e) => console.log(e));
var userId = '5c0a48895544823a407fc2ed';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User Id not found');
    }
    console.log('User by id', JSON.stringify(user, undefined, 2)); //returns an object, null if not found
}).catch((e) => console.log(e));