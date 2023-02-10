interface IOpts{
	items: string[];
	elementRender: HTMLElement | null;
}

function generateItems(opts:IOpts): void {
	let i = 0
	opts.items.forEach((item) => {
		const h3 = document.createElement('h3');
		const span = document.createElement('span');
		span.classList.add('sub-item-text')
		span.innerText = item;
		h3.classList.add('sub-item');
		h3.setAttribute('style', `--i:${i}`)
		h3.appendChild(span)
		opts.elementRender?.appendChild(h3);
		i++;
	});
}

export { generateItems }
