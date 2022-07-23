import {
	View,
	Text,
	SafeAreaView,
	Image,
	TextInput,
	ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	ChevronDownIcon,
	UserIcon,
	SearchIcon,
	AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import { StatusBar } from 'expo-status-bar';

import { Categories, FeaturedRow } from '../components';

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView className='bg-white pt-5'>
			<StatusBar style='dark' />
			{/* Header */}
			<View className='flex-row pb-3 items-center mx-2 space-x-2 px-2'>
				<Image
					source={{ uri: 'https://links.papareact.com/wru' }}
					className='h-7 w-7 bg-gray-300 p-4 rounded-full'
				/>

				<View className='flex-1'>
					<Text className='font-bold text-gray-400 text-xs'>
						Deliver Now!
					</Text>
					<Text className='font-bold text-xl'>
						Current Location
						<ChevronDownIcon size={20} color='#00CCBB' />
					</Text>
				</View>

				<UserIcon size={35} color='#00CCBB' />
			</View>

			{/* Search Bar */}
			<View className='flex-row items-center space-x-2 pb-2 mx-4'>
				<View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
					<SearchIcon size={20} color='gray' />
					<TextInput
						placeholder='Restaurants and/or cuisines'
						keyboardType='default'
					/>
				</View>
				<AdjustmentsIcon color='#00CCBB' />
			</View>

			{/* Body */}
			<ScrollView className='bg-gray-100' contentContainerStyle={{}}>
				{/* Categories */}
				<Categories />

				{/* Featured Rows */}
				<FeaturedRow
					id='1'
					title='Featured'
					description='Paid placements by our partners'
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;