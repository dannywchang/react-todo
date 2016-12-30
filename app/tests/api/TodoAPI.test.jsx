var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',()=>{
  it('should exist',()=>{
    expect(TodoAPI).toExist();
  });
  describe('setTodos',()=> {
    //clear up localStorage before every tests
    beforeEach(()=>{
      localStorage.removeItem('todos');
    });
    it('should set value todos array',()=>{
      var todos = [{
        id:23,
        text:'test',
        completd:false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it('should not set value todos array',()=>{
      var badTodos={a:'b'};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('dotos')).toBe(null);
    });
  });

  describe('getTodos',()=>{
    it('should return empty array for bad localstorage',()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todo if valid array in localstorage', ()=>{
      var todos = [{
        id:23,
        text:'test',
        completd:false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));
      var actualTodos= TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

});
