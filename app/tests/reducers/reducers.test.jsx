var expect = require('expect');

var reducers = require('reducers');

var df = require('deep-freeze-strict');


describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }

      var res = reducers.searchTextReducers(df(''), df(action));

      expect(res).toEqual(action.searchText);


    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed property', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      }

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
});
