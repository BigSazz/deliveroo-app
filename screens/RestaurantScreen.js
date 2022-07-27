import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import {
	ArrowLeftIcon,
	ChevronRightIcon,
	LocationMarkerIcon,
	StarIcon,
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { DishRow, BasketIcon } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { selectBasketItem } from '../features/basketSlice';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const items = useSelector(selectBasketItem);

	const {
		params: {
			id,
			imgUrl,
			title,
			rating,
			genre,
			address,
			short_description,
			dishes,
			lng,
			lat,
		},
	} = useRoute();

	useEffect(() => {
		dispatch(
			setRestaurant({
				id,
				imgUrl,
				title,
				rating,
				genre,
				address,
				short_description,
				dishes,
				lng,
				lat,
			})
		);
	}, [
		dispatch,
		id,
		imgUrl,
		title,
		rating,
		genre,
		address,
		short_description,
		dishes,
		lng,
		lat,
	]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<>
			{items.length > 0 && <BasketIcon />}
			<ScrollView>
				<View className='relative'>
					<Image
						source={{
							uri: urlFor(imgUrl).url(),
						}}
						className='w-full h-56 bg-gray-300 p-4'
					/>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
					>
						<ArrowLeftIcon size={20} color='#00CCBB' />
					</TouchableOpacity>
				</View>

				<View className='bg-white'>
					<View className='p-4'>
						<Text className='text-3xl font-bold'>{title}</Text>
						<View className='flex-row space-x-2 my-1'>
							<View className='flex-row items-center space-x-1'>
								<StarIcon
									size={22}
									opacity={0.5}
									color='green'
								/>
								<Text className='text-xs text-gray-500'>
									<Text className='text-green-500'>
										{rating}
									</Text>{' '}
									. {genre}
								</Text>
							</View>

							<View className='flex-row items-center space-x-1'>
								<LocationMarkerIcon
									size={22}
									opacity={0.4}
									color='gray'
								/>
								<Text className='text-xs text-gray-500'>
									Nearby . {address}
								</Text>
							</View>
						</View>

						<Text className='text-gray-500 mt-2 pb-4'>
							{short_description}
						</Text>
					</View>

					<TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
						<QuestionMarkCircleIcon
							size={20}
							opacity={0.6}
							color='gray'
						/>
						<Text className='pl-2 flex-1 text-md font-bold'>
							Have a food allergy?
						</Text>
						<ChevronRightIcon color='#00CCBB' />
					</TouchableOpacity>
				</View>

				<View className='pb-32'>
					<Text className='px-4 pt-6 mb-3 font-bold text-xl'>
						Menu
					</Text>

					{/* Dishes */}
					{dishes?.map((dish) => (
						<DishRow
							key={dish._id}
							id={dish._id}
							name={dish.name}
							price={dish.price}
							description={dish.short_description}
							image={dish.image}
						/>
					))}
				</View>
			</ScrollView>
		</>
	);
};

export default RestaurantScreen;
