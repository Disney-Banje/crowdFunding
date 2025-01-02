import { PledgeCard } from "./label.js";
export function createModalDefault() {
    const modal = document.createElement('article');
    modal.setAttribute('class', 'modal-default');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Back this project';

    const para = document.createElement('p');
    para.textContent = 'Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?';

    // fetch the pledge information options..
    async function getPledgeData() {
        try {
            const response = await fetch('/data.json');
           
            if(!response.ok) {
                throw new Error('Failed to get pledge information');
            } else {
                const data = await response.json();
                console.log(data);

                const container = document.createElement('div');
                container.classList.add('backing-container');

                data.forEach(item => {
                    const card = new PledgeCard(item.pledgeType, item.description, item.pledgeNumber, item.pledgeAmount, item.isActive);

                    const elem = card.createPledgeCard();
                    container.appendChild(elem);
                })

                return container;
            }
        } catch (err) {
            console.error('Failed to get promise information', err.message);
        }
    }

    /*
    The above async function returns a promise so next time I am going to return the result of the operation... 
    */

    modal.appendChild(heading);
    modal.appendChild(para);
    // modal.appendChild(item);

    return modal;
}