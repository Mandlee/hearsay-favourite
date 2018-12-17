import '../scss/index.scss';

import callHistory from './callHistory.json';
import {timeAgo, transformCalls} from "./helper";

/**
 * Render Call history
 * @param element - Render into this element
 * @param calls {Array} - Call history array
 */
const renderCalls = (element, calls) => {
    try {
        const result = transformCalls(calls).map(call =>
            `<div class="call-list-item">
                <div class="call-name">${call.firstName} <span class="last-name">${call.lastName}</span></div>
                <div class="call-time">${timeAgo(call.callsList[0].called)} <div class="arrow-right"></div></div> 
            </div>`
        );
        element.innerHTML = result.join('');
    }
    catch (e) {
        console.error(e);
    }
};

renderCalls(document.getElementById('content'), callHistory);
