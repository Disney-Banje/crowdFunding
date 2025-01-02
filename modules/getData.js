import { PledgeCard } from "./label.js";

// Fetch pledge data...
// fetch the pledge information options..
export async function getPledgeData() {
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
                const card = new PledgeCard(item.pledgeType, item.description, item.pledgeNumber, item.pledgeAmount, item.isActive, item.name);

                const elem = card.createPledgeCard();
                container.appendChild(elem);
            })

            return container;
        }
    } catch (err) {
        console.error('Failed to get promise information', err.message);
    }
}