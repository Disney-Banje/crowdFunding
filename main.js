import { createModalDefault } from "./modules/modal.js";
import { createCompletedMessage } from "./modules/completed.js";
import { PledgeCard } from "./modules/label.js";
import { getPledgeData } from "./modules/getData.js";

const backProject = document.querySelector('.cta-btn');
export const app = document.querySelector('#app');
const main = document.querySelector('main');
const rewardButton = document.querySelectorAll('.reward-cta');

document.addEventListener('DOMContentLoaded', async () => {
    const generate = await createModalDefault();

    function applyFilter() {
        app.style.filter = 'brightness(50%)';
    }

    const popup = createCompletedMessage();

    backProject.addEventListener('click', () => {
        document.body.appendChild(generate);
        applyFilter();

        const radioButtons = document.querySelectorAll('input[name="pledges"]');
        const pledgeArticles = document.querySelectorAll('.pledge-article');

        radioButtons.forEach((radioButton, index) => {
            radioButton.addEventListener('change', () => {
                pledgeArticles.forEach(pledge => {
                    pledge.classList.remove('selected');
                })
                if (radioButton.checked) {
                    pledgeArticles[index].classList.toggle('selected');
                }
            })
        });
    });

    rewardButton.forEach(reward => {
        reward.addEventListener("click", () => {
            document.body.appendChild(popup);
            applyFilter();
        })
    })

    // app.appendChild(generate);
    
    // app.appendChild(popup);
    // console.log(generate);
})