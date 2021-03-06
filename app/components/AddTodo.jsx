var React = require('react');

var AddTodo = React.createClass({
  handleonSubmit: function (e){
    e.preventDefault();
    var todoText=this.refs.todoText.value;
    if(todoText.length > 0){
      this.refs.todoText.value='';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleonSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"></input>
          <button type="submit" className="button">Add Todo</button>
        </form>
      </div>
    );
  }
});


module.exports = AddTodo;
