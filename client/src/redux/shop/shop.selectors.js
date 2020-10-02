import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectSiteVisibility = createSelector(
   [selectShop],
   shop => shop.shopVisibility
);