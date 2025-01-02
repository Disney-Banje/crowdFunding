export class PledgeCard {
    constructor (pledgeType, description, pledgeNumber, pledgeAmount, isActive, name) {
        this.pledgeType = pledgeType;
        this.description = description;
        this.pledgeNumber = pledgeNumber;
        this.pledgeAmount = pledgeAmount;
        this.isActive = isActive;
        this.name = name;
    }

    createPledgeHeader() {
        const pledgeHeader = document.createElement('div');
        pledgeHeader.classList.add('pledge-header');
        const input = document.createElement('input');
        input.classList.add('custom-radio');
        input.type = 'radio';
        input.setAttribute('name', 'pledges');
        input.setAttribute('id', this.name);
        if (!this.isActive) {
            input.setAttribute('disabled', '');
        }
        pledgeHeader.appendChild(input);
        const pledgeType = document.createElement('div');

        pledgeType.classList.add('pledge-type');

        if (!this.pledgeAmount) {
            pledgeType.innerHTML = `
            <h3>${this.pledgeType}</h3>`;
        } else {
            pledgeType.innerHTML = `
            <h3>${this.pledgeType}</h3>
            <span class='pledge-size'>Pledge $${this.pledgeAmount} or more</span>
            `;
        }

        pledgeHeader.appendChild(pledgeType);

        return pledgeHeader;
    }

    createCardContent() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

         const banner = this.createPledgeHeader();
        const descriptionSection = document.createElement('p');
        descriptionSection.classList.add('card-desc');
        descriptionSection.textContent = this.description;

        const pledgesLeft = document.createElement('p');
        pledgesLeft.classList.add('left-pledges');
        
        if (this.pledgeNumber >= 0) {
            pledgesLeft.innerHTML = `
            <span class="pledge-length">${this.pledgeNumber}</span>
            left
            `;
        }
       
        
        wrapper.appendChild(banner);
        wrapper.appendChild(descriptionSection);
        wrapper.appendChild(pledgesLeft);

        return wrapper;

    }

    createPledgeCard() {
        const label = document.createElement('label');
        label.classList.add('pledge-article', 'card');
        label.setAttribute('for', this.name);

        const content = this.createCardContent();
        label.appendChild(content);

        if (!this.isActive) {
            label.classList.add('inactive');
        }

        return label;
    }
}



/*
The above object contains the template/boilerplate for creating a pledge card, however It will be subject to continuous updates as we go on in the project...
 */