var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');
describe('TodoList', () =>{
  it('should exist', () =>{
    expect(TodoList).toExist();
  });

  it('shoud render one Todo component for each todo item', () =>{
    var todos=[{
      id:1,
      text:'Do something'
    },{
      id:2,
      text:'check mail'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    //check how many check component render sub component
    var todosComponenets = TestUtils.scryRenderedComponentsWithType(todoList,Todo);
    expect(todosComponenets.length).toBe(todos.length);
  });
});
