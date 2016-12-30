var $ = require('jquery');

module.exports = {
  setTodos:function(todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }
  },
  getTodos:function() {
    var stringTodos = localStorage.getItem('todos');
    var todos=[];
    try {
        todos= JSON.parse(stringTodos);
    } catch (e) {

    }
    return $.isArray(todos) ? todos : [];
  },
  fileterTodos:function(todos, showCompleted, searchText) {
    var fileterTodos= todos;
    // Fileter by showCompleted
    fileterTodos = fileterTodos.filter((todo) =>{
      return !todo.completed || showCompleted;
    });
    //Fileter By searchText
    if(searchText.length >0){
      fileterTodos=fileterTodos.filter((todo)=>{
        //判斷object是否符合條件
        return todo.text.toLowerCase().indexOf(searchText.toLowerCase())!==-1;
      });
    }
    //Sort todos with non-completed first
    fileterTodos.sort((a,b)=>{
      if(a.completed===false && b.completed===true){
        return -1;
      }else if(a.completed===true && b.completed===false){
        return 1;
      } else{
        return 0;
      }
    })
    return fileterTodos;
  }

};
