	const customName = document.getElementById('customname');
	const randomize = document.querySelector('.randomize');
	const story = document.querySelector('.story');

	const storyText = 'Faziam 94 fahrenheit do lado de fora e :insertx: decidiu sair para caminhar. Quando ele foi para :inserty:, eles(as) ficaram horrorizados(os) e olharam por alguns instantes, então ele :insertz:. Bob, viu tudo com seus próprios olhos, mas sem nenhuma surpresa — :insertx: pesava 300 pounds e era um dia realmente quente.'
	const insertX = ['Zé muela', 'Flavião da massa', 'Paizão'];
	const insertY = ['a Casa das Prima', 'o Gato Preto', 'a Beira-mar'];
	const insertZ = ['entrou em combustão espontânea', 'virou pudim no meio da rua', 'se transformou em gosma e escorreu para todo lado'];

	function randomValueFromArray(array){
		const random = Math.floor(Math.random()*array.length);
		return array[random];
	}

	randomize.addEventListener('click', result);

	/*Função que altera nomes destacados dentro dos placeholder's da história principal (Ex: :insertx:) por nomes aleatórios,
	bem como adiciona o nome inserido pelo usuário*/
	function result() {

		newStory = storyText;
		xItem = randomValueFromArray(insertX);
		yItem = randomValueFromArray(insertY);
		zItem = randomValueFromArray(insertZ);

		newStory = newStory.replaceAll(':insertx:', xItem);
		newStory = newStory.replace(':inserty:', yItem);
		newStory = newStory.replace(':insertz:', zItem);

		if(customName.value !== '') {
		const name = customName.value;
		newStory = newStory.replaceAll('Bob', name);
	}

	//Altera de 'fahrenheit' e 'pounds' para 'celsius' e 'quilos', respectivamente.
	if(document.getElementById("br").checked) {
		const weight = Math.round(300*0.45359237) + ' quilos';
		const temperature =  Math.round((94-32)*5/9) + 'º celsius';		
		let newWeight = weight;
		let newTemperature = temperature;
		newStory = newStory.replaceAll('300 pounds', newWeight);
		newStory = newStory.replaceAll('94 fahrenheit', newTemperature);

	}

	story.textContent = newStory;
	story.style.visibility = 'visible';
	}