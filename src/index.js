import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

// const itemList = (state = [], action) => {
//   switch (action.type) {
//     case 'GET_ITEM':
//       return action.payload
//     default:
//       return state;
//   }
// };

// function* rootSaga() {
//   yield takeEvery('FETCH_ITEM', fetchItem);
//   yield takeEvery('ADD_ITEM', postItem)
//   // yield takeEvery('DELETE_PLANT', deletePlant)
// }  

// function* fetchItem() {
//   console.log('fetchItem was hit');
//   try {
//     const itemResponse = yield axios.get('/api/shelf');
//     yield dispatch({ type: 'GET_ITEM', payload: itemResponse.data })
//   } catch (error) {
//     console.log('this was an error with the fetch- probably your fault');

//   }
// }

// function* postItem(action) {
//   try {
//     yield axios.post('api/shelf', action.payload);
//     yield dispatch({ type: 'FETCH_ITEM' });
//   } catch (error) {
//     console.log('this was an error with the post- probably your fault');

//   }
// }




const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  // adds all middleware to our project including saga and logger
  applyMiddleware(...middlewareList),
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
