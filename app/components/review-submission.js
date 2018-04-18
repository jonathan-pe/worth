import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

const categoryMap = {
    "cars": "Cars",
    "videogames": "Video Games",
    "food": "Food",
    "music": "Music",
    "shoes": "Shoes"
};

export default Component.extend({
    name: null,
    category: 'Cars',
    price: 0,
    description: null,
    worth: true,

    ineligibleForm: computed('name', 'price', function() {
        return !this.get('name') || (this.get('price') < 0);
    }),

    store: service(),

    actions: {
        addReview() {
            const review = this.get('store').createRecord('review', {
                name: this.get('name'),
                category: this.get('category'),
                price: this.get('price'),
                description: this.get('description'),
                worth: this.get('worth')
            });
            review.save().then(() => {
                console.log('Review saved.')
            }).catch(e => {
                console.log('Error: ' + e)
            });
        },

        setCategory(category) {
            this.set('category', categoryMap[category]);
        },

        setWorth(value) {
            this.set('worth', value === 'yes');
        }
    }
});
