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
        pledgeHeader.classList.add('pledgeHeader');
        const pledgeType = document.createElement('p');
        const pledgeSize = document.createElement('p');

        pledgeType.classList.add('pledgeType');
        pledgeSize.classList.add('pledgeSize');

        if (!this.pledgeAmount && !this.pledgeNumber) {
            pledgeType.textContent = this.pledgeType;
        } else {
            pledgeType.innerHTML = `
            <span class='pledge-title'>${this.pledgeType}</span>
            <span class='pledge-text'>Pledge ${this.pledgeAmount} or more</span>
            `;
            pledgeSize.textContent = `${this.pledgeSize} left;`
        }

        pledgeHeader.appendChild(pledgeType);
        pledgeHeader.appendChild(pledgeSize);

        return pledgeHeader;
    }

    createCardContent() {
        const label = document.createElement('label');

        const input = document.createElement('input');
        input.type = 'radio';

        const div = document.createElement('div');
        const firstSection = this.createPledgeHeader();
        const secondSection = document.createElement('p');
        secondSection.textContent = this.description;
        div.appendChild(firstSection);
        div.appendChild(secondSection);

        label.appendChild(input);
        label.appendChild(div);

        return label;
    }

    createPledgeCard() {
        const card = this.createCardContent();
        card.classList.add('card');

        if (!this.isActive) {
            card.classList.add('inactive');
        }
    }
}