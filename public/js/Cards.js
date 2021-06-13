/**
 * Shuffles an array
 * @param {Array<{id: string, suit: string, value: string}>} array
 * @return {Array<{id: string, suit: string, value: string}>}
 * @constructor
 */
const Shuffler = (array) => {
    let currentIndex = array.length,  randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

/**
 * Cards
 * @type {Array<{id: string, suit: string, value: string}>}
 */
const cards = [
    { id: 'hearts2', suit: 'hearts', value: 2 },
    { id: 'hearts3', suit: 'hearts', value: 3 },
    { id: 'hearts4', suit: 'hearts', value: 4 },
    { id: 'hearts5', suit: 'hearts', value: 5 },
    { id: 'hearts6', suit: 'hearts', value: 6 },
    { id: 'hearts7', suit: 'hearts', value: 7 },
    { id: 'hearts8', suit: 'hearts', value: 8 },
    { id: 'hearts9', suit: 'hearts', value: 9 },
    { id: 'hearts10', suit: 'hearts', value: 10 },
    { id: 'heartsJ', suit: 'hearts', value: 'J' },
    { id: 'heartsQ', suit: 'hearts', value: 'Q' },
    { id: 'heartsK', suit: 'hearts', value: 'K' },
    { id: 'heartsA', suit: 'hearts', value: 'A' },
    { id: 'diamonds2', suit: 'diamonds', value: 2 },
    { id: 'diamonds3', suit: 'diamonds', value: 3 },
    { id: 'diamonds4', suit: 'diamonds', value: 4 },
    { id: 'diamonds5', suit: 'diamonds', value: 5 },
    { id: 'diamonds6', suit: 'diamonds', value: 6 },
    { id: 'diamonds7', suit: 'diamonds', value: 7 },
    { id: 'diamonds8', suit: 'diamonds', value: 8 },
    { id: 'diamonds9', suit: 'diamonds', value: 9 },
    { id: 'diamonds10', suit: 'diamonds', value: 10 },
    { id: 'diamondsJ', suit: 'diamonds', value: 'J' },
    { id: 'diamondsQ', suit: 'diamonds', value: 'Q' },
    { id: 'diamondsK', suit: 'diamonds', value: 'K' },
    { id: 'diamondsA', suit: 'diamonds', value: 'A' },
    { id: 'clubs2', suit: 'clubs', value: 2 },
    { id: 'clubs3', suit: 'clubs', value: 3 },
    { id: 'clubs4', suit: 'clubs', value: 4 },
    { id: 'clubs5', suit: 'clubs', value: 5 },
    { id: 'clubs6', suit: 'clubs', value: 6 },
    { id: 'clubs7', suit: 'clubs', value: 7 },
    { id: 'clubs8', suit: 'clubs', value: 8 },
    { id: 'clubs9', suit: 'clubs', value: 9 },
    { id: 'clubs10', suit: 'clubs', value: 10 },
    { id: 'clubsJ', suit: 'clubs', value: 'J' },
    { id: 'clubsQ', suit: 'clubs', value: 'Q' },
    { id: 'clubsK', suit: 'clubs', value: 'K' },
    { id: 'clubsA', suit: 'clubs', value: 'A' },
    { id: 'spades2', suit: 'spades', value: 2 },
    { id: 'spades3', suit: 'spades', value: 3 },
    { id: 'spades4', suit: 'spades', value: 4 },
    { id: 'spades5', suit: 'spades', value: 5 },
    { id: 'spades6', suit: 'spades', value: 6 },
    { id: 'spades7', suit: 'spades', value: 7 },
    { id: 'spades8', suit: 'spades', value: 8 },
    { id: 'spades9', suit: 'spades', value: 9 },
    { id: 'spades10', suit: 'spades', value: 10 },
    { id: 'spadesJ', suit: 'spades', value: 'J' },
    { id: 'spadesQ', suit: 'spades', value: 'Q' },
    { id: 'spadesK', suit: 'spades', value: 'K' },
    { id: 'spadesA', suit: 'spades', value: 'A' }
];

const shuffledCards = Shuffler(cards);