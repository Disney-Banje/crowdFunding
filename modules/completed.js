import { app } from "../main.js";
export function createCompletedMessage() {
    const article = document.createElement('article');
    article.classList.add('completed-wrapper');

    const icon = document.createElement('img');
    icon.src = '../images/icon-check.svg'

    const heading2 = document.createElement('h2');
    heading2.textContent = `Thanks for your support!`;

    const para = document.createElement('p');
    para.textContent = `Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Rise worldwide. You will get an email once our campaign is completed.`;

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('cta', 'confirm-btn');
    confirmBtn.textContent = 'Got it!';
    confirmBtn.onclick = () => {
        article.style.display = 'none';
        app.style.filter = 'none';
    }


    article.appendChild(icon);
    article.appendChild(heading2);
    article.appendChild(para);
    article.appendChild(confirmBtn);

    return article;  
}