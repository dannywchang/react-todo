var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {
      var {todos} =this.props;
      var renderTodos = () =>{
        //讀取todos陣列
        return todos.map((todo)=>{
            return (
              //...傳入object中所有的proprs
              <Todo key={todo.id} {...todo}/>
            );
        });
      };
      return(
        <div>
          {renderTodos()}
        </div>
      );
    }
});

module.exports = TodoList;
