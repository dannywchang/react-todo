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
    
    //Sort todos with non-completed first

    return fileterTodos;
  }

};
