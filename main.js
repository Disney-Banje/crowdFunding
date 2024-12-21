import { createModalDefault } from "./modules/modal.js";
import { createCompletedMessage } from "./modules/completed.js";
import { PledgeCard } from "./modules/label.js";

document.addEventListener('DOMContentLoaded', () => {
    const generate = createModalDefault();

    console.log(generate);
})