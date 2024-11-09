import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // defaults to localStorage
import userReducer from './userSlice';
import taskReducer from './taskSlice'; 
import courseReducer from './courseSlice'; 

// Configuration for redux-persist
const persistConfig = {
  key: 'root',  // Key for persistence
  storage,  // Use localStorage by default
//   whitelist: ['user','task','course'],  // Only persist the 'user' state (you can add other slices to the whitelist if needed)
};

// Wrap your rootReducer with redux-persist
const rootReducer = combineReducers({
  user: userReducer,
  task: taskReducer,
  course: courseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,  // Use the persistedReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/FLUSH', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER'],
        },
    }),
});

const persistor = persistStore(store);  // Persistor instance that you'll pass to PersistGate

export { store, persistor };
