'use strict';

var client = require('../helpers/es');

module.exports = {
  AddTodo : AddTodo
}

function AddTodo(req,res) {
  res.header('Content-Type','application/json');
  client.create({
    index: 'todo',
    type: 'todo',
    id: req.swagger.params.todo.value.todo_id,
    body: req.swagger.params ,
  },function(error, response){
      res.header('Content-Type','application/json');
      if(error){
        console.log(error);
        res.statusCode = 409;
        res.end(JSON.stringify(error));
      }
      else{
        req.swagger.params.todo.value.datecreated =new Date();
        console.log(`Tod0 ${req.swagger.params.todo.value.todo_id} added to elastic search`);
        res.end();
      }

  })
}