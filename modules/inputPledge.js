export function enterPledge(amount) {
    const container = document.createElement('div');
    const title = document.createElement('p');
    title.textContent = 'Enter your pledge';
    const buttonContainer = document.createElement('div');
    const inputPledge = document.createElement('p');
    inputPledge.classList.add('border-btn');
    inputPledge.innerHTML = `
      <span>$</span>
      <input type="text" name="pledge-amount" id="pledge" value="${amount}"/>
    `;
    const selectionBtn = document.createElement('button');
    selectionBtn.classList.add('btn', 'selection-btn');
    selectionBtn.textContent = 'Continue';

    buttonContainer.appendChild(inputPledge);
    buttonContainer.appendChild(selectionBtn);

    container.appendChild(title);
    container.appendChild(buttonContainer);

    return container;
    
}


// Finished creating the input pledge section when the user clicks on a pledge type...
