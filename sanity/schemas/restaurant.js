export default {
	name: 'restaurant',
	title: 'Restaurant',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Restaurant Name',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'short_description',
			type: 'string',
			title: 'Short Description',
			validation: (Rule) => Rule.max(200),
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image of the Restaurant',
		},
		{
			name: 'lat',
			type: 'number',
			title: 'Latitude of the Restaurant',
		},
		{
			name: 'lng',
			type: 'number',
			title: 'Longitude of the Restaurant',
		},
		{
			name: 'address',
			type: 'string',
			title: 'Address of the Restaurant',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'rating',
			type: 'number',
			title: 'Enter a rating for the restaurant (1-5 stars)',
			validation: (Rule) =>
				Rule.required()
					.min(1)
					.max(5)
					.error('Rating must be between 1 and 5'),
		},
		{
			name: 'type',
			title: 'category',
			type: 'reference',
			to: [{ type: 'category' }],
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'dishes',
			title: 'Dishes',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'dish' }] }],
		},
	],
};
