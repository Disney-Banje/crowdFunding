export class PledgeCard {
    constructor (pledgeType, description, pledgeNumber, pledgeAmount, isActive) {
        this.pledgeType = pledgeType;
        this.description = description;
        this.pledgeNumber = pledgeNumber;
        this.pledgeAmount = pledgeAmount;
        this.isActive = isActive;
    }

    createPledgeHeader() {
        const pledgeHeader = document.createElement('div');
        pledgeHeader.classList.add('pledge-header');
        const input = document.createElement('input');
        input.type = 'radio';
        pledgeHeader.appendChild(input);
        const pledgeType = document.createElement('p');

        pledgeType.classList.add('pledgeType');

        if (!this.pledgeAmount && !this.pledgeNumber) {
            pledgeType.textContent = this.pledgeType;
        } else {
            pledgeType.innerHTML = `
            <span class='pledge-title'>${this.pledgeType}</span>
            <span class='pledge-text'>Pledge $${this.pledgeAmount} or more</span>
            `;
        }

        pledgeHeader.appendChild(pledgeType);

        return pledgeHeader;
    }

    createCardContent() {
        const label = document.createElement('label');


        const div = document.createElement('div');
        const firstSection = this.createPledgeHeader();
        const secondSection = document.createElement('p');
        secondSection.textContent = this.description;
        const remainingPledges = document.createElement('p');
        remainingPledges.innerHTML = `
           <span class='pledges-left'>${this.pledgeNumber}</span>
           left
        `;

        div.appendChild(firstSection);
        div.appendChild(secondSection);
        div.appendChild(remainingPledges);


        label.appendChild(div);

        return label;
    }

    createPledgeCard() {
        const card = this.createCardContent();
        card.classList.add('card');

        if (!this.isActive) {
            card.classList.add('inactive');
        }

        return card;
    }
}



/*
The above object contains the template/boilerplate for creating a pledge card, however It will be subject to continuous updates as we go on in the project...
 */