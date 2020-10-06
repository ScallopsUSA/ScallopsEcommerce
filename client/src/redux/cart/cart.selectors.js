import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartVisibility = createSelector(
   [selectCart],
   cart => cart.cartVisibility
);