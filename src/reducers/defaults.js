const defaults = {
	colors: { 
			[Symbol('Red')]: { id: 'c_red', color: 'red' }, 
			[Symbol('Green')]: { id: 'c_green', color: 'green' },
			[Symbol('Blue')]: { id: 'c_blue', color: 'blue' }, 
			[Symbol('White')]: { id: 'c_white', color: 'white' },
			[Symbol('Black')]: { id: 'c_black', color: 'black' },
			[Symbol('Yellow')]: { id: 'c_yellow', color: 'yellow' },
			[Symbol('Pink')]: { id: 'c_pink', color: 'pink' },
			[Symbol('Orange')]: { id: 'c_orange', color: 'orange' },
			[Symbol('Brown')]: { id: 'c_brown', color: 'brown' },
			[Symbol('LightBlue')]: { id: 'c_lightblue', color: 'lightblue' },
			[Symbol('Gray')]: { id: 'c_gray', color: 'gray' }
	},
	levels: {
			[Symbol('Beginner')]: { id: 'l_beginner', name: 'Beginner' },
			[Symbol('Intermediate')]: { id: 'l_intermediate', name: 'Intermediate' },
			[Symbol('Advanced')]: { id: 'l_advanced', name: 'Advanced' }
	}	
};

export default defaults;
