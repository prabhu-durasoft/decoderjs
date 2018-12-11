const generateTargetColors = (levelOfGame, availableColors) => {
	let targetColors = []
	let extractedColors = [];
	for(let key of Object.getOwnPropertySymbols(availableColors)) {
		extractedColors.push({ id: availableColors[key].id, color: availableColors[key].color})	
	} 
	switch (levelOfGame) {
	case 'l_beginner':
		while(targetColors.length !== 5) {
			let randomIndex = Math.floor(Math.random() * extractedColors.length);
			let color = extractedColors[randomIndex];
			targetColors.push(color);
			extractedColors = extractedColors.filter(it => it.id !== color.id);
		}
		break;
	case 'l_intermediate':
		let duplicateAlreadyPresent = false;
		while(targetColors.length !== 5) {
			let randomIndex = Math.floor(Math.random() * extractedColors.length);
			let color = extractedColors[randomIndex];
			if(targetColors.find(it => it.id === color.id) && duplicateAlreadyPresent) {
				extractedColors = extractedColors.filter(it => it.id !== color.id);
			}
			else if(targetColors.find(it => it.id === color.id) && !duplicateAlreadyPresent) {
				duplicateAlreadyPresent = true;
				extractedColors = extractedColors.filter(it => it.id !== color.id);	
				targetColors.push(color);	
			}
			else{
				targetColors.push(color);	
			}
		}
		break;	
	case 'l_advanced':
		while(targetColors.length !== 5) {
			let randomIndex = Math.floor(Math.random() * extractedColors.length);
			let color = extractedColors[randomIndex];
			targetColors.push(color);
		}
		break;	
	default:
		break;	
	}
	return targetColors;
};

export default generateTargetColors;