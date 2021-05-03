import { configureStore} from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from '../Auth/authSlice';

const Store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({

    serializableCheck: false,
    immutableCheck: false ,
    
  }),
});

export default Store