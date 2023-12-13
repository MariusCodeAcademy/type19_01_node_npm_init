'use strict';
console.log('app.js application running');
const dayjs = require('dayjs');

const now = dayjs();
console.log(now.format());
// https://day.js.org/docs/en/display/format
console.log(now.format('YYYY-MMM-DD, dddd'));

console.log('Hello again');
