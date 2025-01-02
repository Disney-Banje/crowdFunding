import { PledgeCard } from "./label.js";
import { getPledgeData } from "./getData.js";
export async function createModalDefault() {
    const modal = document.createElement('article');
    modal.classList.add('modal-default');

    const innerModal = document.createElement('div');
    innerModal.classList.add('inner-modal');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Back this project';

    const para = document.createElement('p');
    para.textContent = 'Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?';

    innerModal.appendChild(heading);
    innerModal.appendChild(para);

    try {
        const pledgeDataContainer = await getPledgeData();
        innerModal.appendChild(pledgeDataContainer);
    } catch (err) {
        console.error('Failed to append pledge data', err.message);
    }

    modal.appendChild(innerModal);
    
    return modal;
}