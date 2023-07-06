import takeAChance from './take-a-chance.js';

takeAChance('Kevin')
  .then(console.log('winning success messasge'))
  .catch(console.log(Error('its just bad luck')));
