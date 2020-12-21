import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddlerware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddlerware();

const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
