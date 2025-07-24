const { combineReducers } = require('redux')
const {  createStore} = require('redux')



function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}


function authReducer(state = { isLoggedIn: false }, action) {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: true };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);


store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'LOGIN' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'LOGIN' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'LOGIN' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'LOGIN' });

console.log(store.getState());

