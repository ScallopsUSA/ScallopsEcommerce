import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectSiteVisibility = createSelector(
   [selectCart],
   cart => cart.cartVisibility
);