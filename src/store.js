import { createStore } from "redux";
import { counterReducer } from "./component/services/reducer/CounterReducer";

const store = createStore(counterReducer);
export default store;