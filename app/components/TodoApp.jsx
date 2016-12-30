var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass ({
  getInitialState:function(){
    return {
      showCompleted:false,
      searchText:'',
      todos:[
        {
          id:1,
          text:'Walk the dog'
        },{
          id:2,
          text:'Clean the yard'
        },{
          id:3,
          text:'Leave mail on proch'
        },{
          id:4,
          text:'Play video game'
        }
      ]
    }
  },
  handleAddtoDo: function(text){
      alert('new todo: ' + text);
  },
  handleSearch:function(showCompleted, searchText) {
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddtoDo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
