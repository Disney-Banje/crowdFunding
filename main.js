import { createModalDefault } from "./modules/modal.js";
import { createCompletedMessage } from "./modules/completed.js";
import { PledgeCard } from "./modules/label.js";
import { getPledgeData } from "./modules/getData.js";

const backProject = document.querySelector('.cta-btn');
const app = document.querySelector('#app');
const main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', async () => {
    const generate = await createModalDefault();

    backProject.addEventListener('click', () => {
        document.body.appendChild(generate);
        app.style.filter = 'brightness(50%)';
    });

    // app.appendChild(generate);
    console.log(generate);
})