var React = require('react');
var moment = require('moment');
var Todo = React.createClass({
    render: function(){
      var {id, text, completed,createdAt,completedAt} = this.props;
      var renderDate=()=>{
        var message = 'Created ';
        var timestamp=createdAt;
        if(completed){
          message='Complted ';
          timestamp=completedAt;
        }
        return message +moment.unix(timestamp).format('YYYY-MM-DD HH:MM:SS');
      };
      return (
        <div onClick={() => {
            this.props.onToggle(id);
          }}>
         <input type="checkbox" checked={completed} />
         <p>{text}</p>
         <p>{renderDate()}</p>
        </div>
      );
    }
});

module.exports = Todo;
