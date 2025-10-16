import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const cartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...state.items, action.payload];
      state.total = state.total + action.payload.price
    },
    deleteItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items.splice(getIndex(action.payload, state.items), 1);
      state.total = state.total - action.payload.price;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer;

