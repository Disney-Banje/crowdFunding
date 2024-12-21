export function createModalDefault() {
    const modal = document.createElement('article');
    modal.setAttribute('class', 'modal-default');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Back this project';

    const para = document.createElement('p');
    para.textContent = 'Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?';

    modal.appendChild(heading);
    modal.appendChild(para);

    return modal;
}