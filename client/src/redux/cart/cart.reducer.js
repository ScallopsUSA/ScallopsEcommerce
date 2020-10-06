import { cartActionTypes } from './cart.actionTypes';

const INITIAL_STATE = {
    cartVisibility: false
}

const cartReducer = ( state=INITIAL_STATE, action ) => {
   switch( action.type ) {
         
      default:
         return state;
   }
};

export default cartReducer;