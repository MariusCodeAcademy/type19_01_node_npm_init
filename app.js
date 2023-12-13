'use strict';
console.log('app.js application running');
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const now = dayjs();
console.log(now.format());
// https://day.js.org/docs/en/display/format
console.log(now.format('YYYY-MMM-DD, dddd'));

const tenDaysAhead = now.add(10, 'Day');
console.log('tenDaysAhead', tenDaysAhead.format('YYYY-MMM-DD, dddd'));

// kiek dienu iki kaledu
const tillKaledos = now.to('2023-12-25');
console.log('tillKaledos ===', tillKaledos);

console.log('Hello again !!!');
