import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
	isCartOpen: false,
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart: (state) => {
			state.isCartOpen = !state.isCartOpen;
		},
		addToCart: (state, action) => {
			const existingItem = state.cart.find(
				(item) => item.title === action.payload.title
			);
			if (existingItem) {
				existingItem.quantity++;
				existingItem.total = existingItem.quantity * existingItem.price;
			} else {
				state.cart.push({
					...action.payload,
					quantity: 1,
					total: action.payload.price,
				});
			}
		},
		increaseQuantity: (state, action) => {
			const existingItem = state.cart.find(
				(item) => item.title === action.payload.title
			);
			if (existingItem) {
				existingItem.quantity++;
				existingItem.total = existingItem.quantity * existingItem.price;
			}
		},
		decreaseQuantity: (state, action) => {
			const existingItem = state.cart.find(
				(item) => item.title === action.payload.title
			);
			if (existingItem) {
				existingItem.quantity--;
				existingItem.total = existingItem.quantity * existingItem.price;
			}
		},
		removeFromCart: (state, action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},
		clearCart: (state) => {
			state.cart = [];
		},
	},
});

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});

export default store;
export const {
	toggleCart,
	addToCart,
	removeFromCart,
	clearCart,
	decreaseQuantity,
	increaseQuantity,
} = cartSlice.actions;
