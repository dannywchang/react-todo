var moment = require('moment');

console.log(moment().format());

var now=moment();

console.log('Current timesamp', now.unix());

var timesamp =  1483088364;
var currentMoment = moment.unix(timesamp);
console.log('Current moment', currentMoment.format());


console.log('Current moment', currentMoment.format('MMMM Mo, YYYY @ HH:MM A'));
