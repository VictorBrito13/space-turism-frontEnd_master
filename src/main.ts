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
	});

	generateItems({
		items: [ "Launch vehicle", "Spaceport", "Space capsule" ],
		elementRender: document.querySelector('#tech .sub-menu')
	});

	const data = await getData();
	const destinations = data.destinations;

	//* Destinations
	const destinationContainer = document.querySelector('.destinations-container'),
		destinationTemplate = <HTMLTemplateElement> document.getElementById('destination-template'),
		destinationFragment = document.createDocumentFragment();

	if(destinationTemplate.content){
		destinations.forEach(destination => {
			const destinationName = destinationTemplate.content.querySelector('.destination-container .destination-name');
			const destinationImg = <HTMLImageElement> destinationTemplate.content.querySelector('.destination-container .destination-image');
			const destinationDescription = destinationTemplate.content.querySelector('.destination-container .destination-description');
			const destinationDistance = destinationTemplate.content.querySelector('.destination-container .destination-info .destination-distance');
			const destiantionTravel = destinationTemplate.content.querySelector('.destination-container .destination-info .destination-travel');
			if(destinationName){
				destinationName.textContent = destination.name;
			}
			if(destinationImg){
				destinationImg.src = destination.images.webp;
			}
			if(destinationDescription){
				destinationDescription.textContent = destination.description;
			}
			if(destinationDistance){
				destinationDistance.textContent = `Distance: ${destination.distance}`;
			}
			if(destiantionTravel){
				destiantionTravel.textContent = `Travel time: ${destination.travel}`;
			}
			const templateClone = document.importNode(destinationTemplate.content, true);
			destinationFragment.appendChild(templateClone);
		});
	}

	destinationContainer?.appendChild(destinationFragment);
	destinationContainer?.querySelector('.destination-container')?.classList.add('destination-container-active');

	changeMenuItem('#destination .sub-item', '.destination-container', 'destination-container-active');

	//* Crew
	const crew = data.crew;
	const crewContainer = document.querySelector('.crews-container');
	const crewTemplate = <HTMLTemplateElement> document.getElementById('crew-template');
	const crewFragment = document.createDocumentFragment();

	if(crewTemplate.content){
		crew.forEach(member => {
			const crewName = crewTemplate.content.querySelector('.crew-container .crew-name');
			const crewImage = <HTMLImageElement> crewTemplate.content.querySelector('.crew-container .crew-image');
			const crewBio = crewTemplate.content.querySelector('.crew-container .crew-bio');
			const crewRole = crewTemplate.content.querySelector('.crew-container .crew-role');
			if(crewName){
				crewName.textContent = member.name;
			}
			if(crewImage){
				crewImage.src = member.images.webp;
			}
			if(crewBio){
				crewBio.textContent = member.bio;
			}
			if(crewRole){
				crewRole.textContent = `Role: ${member.role}`;
			}
			const templateClone = document.importNode(crewTemplate.content, true);
			crewFragment.appendChild(templateClone);
		});
	}

	crewContainer?.appendChild(crewFragment);
	crewContainer?.querySelector('.crew-container')?.classList.add('crew-container-active');

	changeMenuItem('#crew .sub-item', '.crew-container', 'crew-container-active');

	//* Techs
	const techs = data.technology;
	const techsContainer = document.querySelector('.techs-container');
	const techTemplate = <HTMLTemplateElement> document.getElementById('tech-template');
	const techFragment = document.createDocumentFragment();

	if(techTemplate.content){
		techs.forEach(tech => {
			const techName = techTemplate.content.querySelector('.tech-container .tech-name');
			const techImage = <HTMLImageElement> techTemplate.content.querySelector('.tech-container .tech-image');
			const techDescription = techTemplate.content.querySelector('.tech-container .tech-description');

			if(techName){
				techName.textContent = tech.name;
			}
			if(techImage){
				techImage.src = tech.images.portrait;
			}
			if(techDescription){
				techDescription.textContent = tech.description;
			}

			const templateClone = document.importNode(techTemplate.content, true);
			techFragment.appendChild(templateClone);
		});
	}

	techsContainer?.appendChild(techFragment);
	techsContainer?.querySelector('.tech-container')?.classList.add('tech-container-active');

	changeMenuItem('#tech .sub-item', '.tech-container', 'tech-container-active');

	document.querySelector('.logo')?.addEventListener('click', () => {
		document.querySelector('.menu')?.classList.toggle('active');
	});

});