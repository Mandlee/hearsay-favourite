// helper
//https://gist.github.com/nobitagit/74c507a96a73cbcace6c824bc9c2fecf
/**
 * Epochs
 * @type {*[]}
 */
const epochs = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
];

/**
 * Get duration
 * @param timeAgoInSeconds {Number} - Time ago in seconds
 * @returns {{interval: number, epoch: *}}
 */
const getDuration = (timeAgoInSeconds) => {
    for (let [name, seconds] of epochs) {
        const interval = Math.floor(timeAgoInSeconds / seconds);

        if (interval >= 1) {
            return {
                interval: interval,
                epoch: name
            };
        }
    }
};

/**
 * Time ago helper function
 * @param date {Number} - UNIX timestamp
 * @returns {string}
 */
export const timeAgo = (date) => {
    const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
    const {interval, epoch} = getDuration(timeAgoInSeconds);
    const suffix = interval === 1 ? '' : 's';

    return `${interval} ${epoch}${suffix} ago`;
};

/**
 * Transform call history to be easier to handle
 * @param calls {Array} - Array of call history list
 * @returns {Array}
 */
export const transformCalls = (calls) => {
    if (!calls) {
        return [];
    }

    let result = [];
    let sortedResult;

    for (let i = 0, length = calls.length; i < length; i++) {
        const {firstName, lastName, phoneNumber, called} = calls[i];

        // Phone numbers it not seem to me unique. Example: Wallace phone number
        const previousCallIndex = result.findIndex(elem => {
            return elem.lastName === lastName && elem.firstName === firstName;
        });

        const call = {
            phoneNumber,
            called: new Date(called * 1000)
        };

        // Push other call to callsList
        if (previousCallIndex !== -1) {
            result[previousCallIndex].callsList.push(call);
        } else {
            // Push result item with first item to callsList
            result.push({
                firstName,
                lastName,
                callsList: [call]
            });
        }
    }

    // Sorting each calls list descending
    for (let i = 0, length = result.length; i < length; i++) {
        const {callsList} = result[i];
        result[i].callsList = callsList.sort((a, b) => {
            return b.called - a.called;
        });
    }

    // Sorting contacts descending by callsList length,
    // when two contacts are equal, then the contact with the latest last call
    sortedResult = result.sort((a, b) => {
        if (a.callsList.length === b.callsList.length) {
            return b.callsList[0].called - a.callsList[0].called;
        }
        return b.callsList.length - a.callsList.length;
    });

    return sortedResult;
};
