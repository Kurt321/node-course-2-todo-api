const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findByIdAndRemove();
// Todo.findOneAndRemove({});
// Todo.findOneAndRemove({_id: '5c0bbeb9efde9cc24cb6c22d'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5c0bbeb9efde9cc24cb6c22d').then((todo) => {
    console.log(todo);
});