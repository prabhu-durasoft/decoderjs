const defaults = {
	colors: [ 
			Symbol('Red'), 
			Symbol('Green'), 
			Symbol('Blue'), 
			Symbol('White'),
			Symbol('Black'),
			Symbol('Yellow'),
			Symbol('Pink'),
			Symbol('Orange'),
			Symbol('Brown'),
			Symbol('Melange'),
			Symbol('Gray')
	],
	levels: [
			Symbol('Beginner'),
			Symbol('Intermediate'),
			Symbol('Advanced')
	]		
};

export const availableColors = {
	type: 'GET_AVAILABLE_COLORS',
	values: defaults.colors
};

export const availableLevels = {
	type: 'GET_AVAILABLE_LEVELS',
	values: defaults.levels
};