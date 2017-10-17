const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

Todo.findOneAndRemove({_id: '59e554a0e3d71e27774375cf'}).then((todo) => {
    
});

Todo.findByIdAndRemove('59e554a0e3d71e27774375cf').then((todo) => {
    console.log(todo);
});
