function changeMenuItem(targetClass: string, itemsClass: string, cssClass: string): void {
    const elements = document.querySelectorAll(targetClass);
    const items = document.querySelectorAll(itemsClass);

    elements.forEach(element => {
        element.addEventListener('click', () => {
            items.forEach(item => {
                if(item.querySelector('h3')?.textContent?.match(element.textContent ?? '')){
                    item.classList.add(cssClass)
                }else{
                    item.classList.remove(cssClass)
                }
            });
        });
    });
}


export { changeMenuItem }