import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import photoReducer from './photo';
import dogReducer from "./dog";
import newsPhotoReducer from "./new_photo";
import noteReducer from "./note";
import healthRecordReducer from "./healthRecord";
import trainingRecordReducer from "./trainingRecord";
import behaviorRecordReducer from "./behaviorRecord";
import friendReducer from "./friendship";

const rootReducer = combineReducers({
  session: sessionReducer,
  photo:photoReducer,
  dog:dogReducer,
  newsPhoto:newsPhotoReducer,
  note:noteReducer,
  healthRecord:healthRecordReducer,
  trainingRecord:trainingRecordReducer,
  behaviorRecord:behaviorRecordReducer,
  friend:friendReducer
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
