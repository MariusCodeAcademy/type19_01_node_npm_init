'use strict';
console.log('app.js application running');
const dayjs = require('dayjs');
const { tillKaledos } = require('./modules/time');
// importuot users (app.js)

const now = dayjs();
console.log(now.format());
// https://day.js.org/docs/en/display/format
console.log(now.format('YYYY-MMM-DD, dddd'));

const tenDaysAhead = now.add(10, 'Day');
console.log('tenDaysAhead', tenDaysAhead.format('YYYY-MMM-DD, dddd'));

console.log('tillKaledos ===', tillKaledos, 'till christmas');
