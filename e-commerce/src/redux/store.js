import { createStore } from "redux";
import reducers from "./reducers/index";

//*9 created a contant of store   and first argument is reducer which is combinedReducer and second argument is state{ }
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
