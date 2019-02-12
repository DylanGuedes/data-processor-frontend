import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

// Tell the inflector that the plural of "campus" is "campuses"
inflector.irregular('template', 'templates');

// Tell the inflector that the plural of "advice" is "advice"
inflector.uncountable('advice');

// Modules must have an export, so we just export an empty object here
export default {};
