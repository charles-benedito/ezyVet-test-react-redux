import { createStore } from 'redux';
import appReducer from  './reducers';
import StateLoader from "./state.loader.js"

const stateLoader = new StateLoader();

const store = createStore(
  appReducer,
  stateLoader.loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  stateLoader.saveState(store.getState());
});

export default store;