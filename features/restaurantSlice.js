import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	restaurant: {
		id: null,
		imgUrl: null,
		title: null,
		short_description: null,
		genre: null,
		address: null,
		rating: null,
		dishes: null,
		lat: null,
		lng: null,
	},
};

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState,
	reducers: {
		setRestaurant: (state, action) => {
			state.restaurant = action.payload;
		},
	},
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
