import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Note: this API requires redux@>=3.1.0
const initialStore = {
  token: null,
  user: null,
  suggestions: null,
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedRootReducer,
  initialStore,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
