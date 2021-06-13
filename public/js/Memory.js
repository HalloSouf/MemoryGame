/**
 * Memory
 */
class Memory {

    constructor() {
        /**
         * Current selected cards
         * @type {Array<string>}}
         */
        this.selected = [];

        /**
         * @type {
         *     Array<{
         *         id: string,
         *         suit: string,
         *         value: string
         *     }>
         * }
         */
        this.cards = shuffledCards;

        /**
         * Check on timeout
         * @type {boolean}
         */
        this.timeout = false;

        /**
         * User points
         * @type {number}
         */
        this.points = 0;
    }

    /**
     * Get card by ID
     * @param {string} id
     * @returns {{id: string, suit: string, value: string}}
     */
    get(id) {
        return this.cards.find((card) => card.id === id);
    }

    /**
     * Select card from choice
     * @param element
     */
    select(element) {
        if (this.timeout) return;
        if (this.selected.includes(element.id)) return;

        this.selected.push(element.id);
        element.className = `${element.className} text-green-400`;

        if (!this.checkValue(this.selected[0], element.id)) {
            this.removePoints(1);
            return this.deselectAll();
        }

        if (this.selected.length === 4)
            return this.fullStack();
    }

    /**
     * Deselect all cards
     */
    deselectAll() {
        this.timeout = true;
        setTimeout(() => {
            this.selected.forEach((card) => {
                const element = document.getElementById(`${card}`);
                let classes = element.className.split(' ');
                let index = classes.indexOf('text-green-400');

                classes.splice(index, 1);
                element.className = `${classes.join(' ')}`;
            });

            this.selected = [];
            this.timeout = false;
        }, 1500)
    }

    /**
     * Execute by fullstack
     */
    fullStack() {
        this.timeout = true;
        setTimeout(() => {
            this.selected.forEach((card) => {
                const element = document.getElementById(`${card}`);
                element.className = `${element.className} invisible`;
            });

            this.addPoints(20);
            this.selected = [];
            this.timeout = false;
        }, 1500);
    }

    /**
     * Check the difference between cards
     * @param {string} firstcard
     * @param {string} currentcard
     * @returns {boolean}
     */
    checkValue(firstcard, currentcard) {
        let firstCard = this.get(firstcard);
        let currentCard = this.get(currentcard);

        return currentCard.value === firstCard.value;
    }

    /**
     * Add points to the user
     * @param {number} number
     */
    addPoints(number) {
        this.points = this.points + number;
        document.getElementById('points').innerText = `${this.points}`;
    }

    /**
     * Remove points to the user
     * @param {number} number
     */
    removePoints(number) {
        this.points = this.points - number <= 0 ? 0 : this.points - number;
        document.getElementById('points').innerText = `${this.points}`;
    }

    /**
     * Load cards into webpage
     */
    load() {
        const container = document.getElementById('card-grid');
        for (let i = 0; i < this.cards.length; i++) {
            const wrapper = document.createElement('div');
            wrapper.innerText = `${this.cards[i].suit}${this.cards[i].value}`;
            wrapper.id = `${this.cards[i].suit}${this.cards[i].value}`;
            wrapper.className = 'flex justify-center p-2 bg-white rounded-lg';

            container.appendChild(wrapper);

            wrapper.addEventListener('click', (ev) => {
                this.select(ev.target);
            });
        }
    }

}