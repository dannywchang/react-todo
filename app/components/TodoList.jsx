var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {
      var {todos} =this.props;
      var renderTodos = () =>{
        if(todos.length===0){
          return (
            <p className="container__message">Nothing to do</p>
          );
        }
        //讀取todos陣列
        return todos.map((todo)=>{
            return (
              //...傳入object中所有的proprs
              <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
