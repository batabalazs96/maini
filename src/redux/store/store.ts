import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import enviroment from '../../config/enviroment';
import sagas from '../sagas/sagas';
import mainReducer from '../reducers/mainReducer';


const RootReducer = combineReducers({
    main: mainReducer
});

const sagaMiddleware = createSagaMiddleware();

const encryptor = encryptTransform({
    secretKey: `${enviroment.NAME_KEY}-storage`,
    onError: (error: any) => {
        console.log({ error: error });
    },
});

const persistConfig = {
    key: enviroment.NAME_KEY,
    storage,
    whitelist: ['auth', 'cms'],
    transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        sagaMiddleware,
    ],
    devTools: enviroment.NODE_ENV !== 'production',
});

sagaMiddleware.run(sagas);

export default store;
export const Persistor = persistStore(store);
