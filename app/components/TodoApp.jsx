var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass ({
  getInitialState:function(){
    return {
      showCompleted:false,
      searchText:'',
      todos:TodoAPI.getTodos()
    };
  },
  handleToggle:function(id){
    var updatedTodos =this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos:updatedTodos});
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddtoDo: function(text){
      this.setState({
        todos:[
          ...this.state.todos,{
            id:uuid(),
            text:text,
            completed:false
          }
        ]
      });
  },
  handleSearch:function(showCompleted, searchText) {
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var fileterTodos = TodoAPI.fileterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={fileterTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddtoDo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
