import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import homepageReducer from './components/features/homepage/homepageSlice';
import { homepageSaga } from './/components/features/homepage/homepageSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    protfolio: homepageReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(homepageSaga);

export default store;