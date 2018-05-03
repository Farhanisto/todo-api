module.exports = {
  GetAllTodos : GetAllTodos
}

function GetAllTodos(req,res,next){
  res.json([{
    todo_id: 0,
    todo:"buy milk",
    datecreated: "2016-11-01T23:15:00.000Z",
    author: "farhan",
    duedate:"2016-11-08T08:00:00.000Z",
    completed:false
  }])

}