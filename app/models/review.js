import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    category: DS.attr('string'),
    price: DS.attr('number'),
    description: DS.attr('string'),
    worth: DS.attr('boolean'),
});
