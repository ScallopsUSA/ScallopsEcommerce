import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// [ SUB REDUCERS ]
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import siteReducer from './site/site.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: [ 'shop', 'user', 'site', 'cart' ],
};

const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer,
    site: siteReducer,
    user: userReducer,
});

export default persistReducer( persistConfig, rootReducer );