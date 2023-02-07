import { generateItems } from './ts/generateItems';
import { getData } from './ts/getData';
import { changeMenuItem } from './ts/changeDestination';

document.addEventListener('DOMContentLoaded', async () => {
	generateItems({
		items: ["Europa", "Mars", "Moon", "Titan"],
		elementRender: document.querySelector('.sub-menu')
	});

	const data = await getData();
	const destinations = data.destinations;

	//* Destinations
	const destinationContainer = document.querySelector('.destinations-container'),
		destinationTemplate = document.getElementById('destination-template')?.content,
		destinationFragment = document.createDocumentFragment();

		destinations.forEach(destination => {
		destinationTemplate.querySelector('.destination-container .destination-name').textContent = destination.name;
		destinationTemplate.querySelector('.destination-container .destination-image').src = destination.images.webp;
		destinationTemplate.querySelector('.destination-container .destination-description').textContent = destination.description;
		destinationTemplate.querySelector('.destination-container .destination-info .destination-distance').textContent += destination.distance;
		destinationTemplate.querySelector('.destination-container .destination-info .destination-travel').textContent += destination.travel;
		const templateClone = document.importNode(destinationTemplate, true);
		destinationFragment.appendChild(templateClone);
	});
	destinationContainer?.appendChild(destinationFragment);
	destinationContainer?.querySelector('.destination-container')?.classList.add('destination-container-active');

	changeMenuItem('.sub-item', '.destination-container', 'destination-container-active');
});