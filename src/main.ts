import { generateItems } from './ts/generateItems';
import { getData } from './ts/getData';
import { changeMenuItem } from './ts/changeDestination';

document.addEventListener('DOMContentLoaded', async () => {
	generateItems({
		items: ["Europa", "Mars", "Moon", "Titan"],
		elementRender: document.querySelector('#destination .sub-menu')
	});

	generateItems({
		items: [ "Douglas H.", "Mark S.", "Victor G.", "Anousheh A." ],
		elementRender: document.querySelector('#crew .sub-menu')
	})

	generateItems({
		items: [ "Launch vehicle", "Spaceport", "Space capsule" ],
		elementRender: document.querySelector('#tech .sub-menu')
	})

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
		destinationTemplate.querySelector('.destination-container .destination-info .destination-distance').textContent = `Distance: ${destination.distance}`;
		destinationTemplate.querySelector('.destination-container .destination-info .destination-travel').textContent = `Travel time: ${destination.travel}`;
		const templateClone = document.importNode(destinationTemplate, true);
		destinationFragment.appendChild(templateClone);
	});
	destinationContainer?.appendChild(destinationFragment);
	destinationContainer?.querySelector('.destination-container')?.classList.add('destination-container-active');

	changeMenuItem('#destination .sub-item', '.destination-container', 'destination-container-active');

	//* Crew
	const crew = data.crew;
	const crewContainer = document.querySelector('.crews-container');
	const crewTemplate = document.getElementById('crew-template')?.content;
	const crewFragment = document.createDocumentFragment();

	crew.forEach(member => {
		crewTemplate.querySelector('.crew-container .crew-name').textContent = member.name;
		crewTemplate.querySelector('.crew-container .crew-image').src = member.images.webp;
		crewTemplate.querySelector('.crew-container .crew-bio').textContent = member.bio;
		crewTemplate.querySelector('.crew-container .crew-role').textContent = `Role: ${member.role}`;
		const templateClone = document.importNode(crewTemplate, true);
		crewFragment.appendChild(templateClone);
	});

	crewContainer?.appendChild(crewFragment);
	crewContainer?.querySelector('.crew-container')?.classList.add('crew-container-active');

	changeMenuItem('#crew .sub-item', '.crew-container', 'crew-container-active');

	//* Techs
	const techs = data.technology;
	const techsContainer = document.querySelector('.techs-container');
	const techTemplate = document.getElementById('tech-template')?.content;
	const techFragment = document.createDocumentFragment();

	techs.forEach(tech => {
		techTemplate.querySelector('.tech-container .tech-name').textContent = tech.name;
		techTemplate.querySelector('.tech-container .tech-image').src = tech.images.portrait;
		techTemplate.querySelector('.tech-container .tech-description').textContent = tech.description;
		const templateClone = document.importNode(techTemplate, true);
		techFragment.appendChild(templateClone);
	});

	techsContainer?.appendChild(techFragment);
	techsContainer?.querySelector('.tech-container')?.classList.add('tech-container-active');

	changeMenuItem('#tech .sub-item', '.tech-container', 'tech-container-active');

	document.querySelector('.logo')?.addEventListener('click', () => {
		document.querySelector('.menu')?.classList.toggle('active');
	});

});