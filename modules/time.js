'use strict';
console.log('time.js file was loaded');
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const now = dayjs();
// kiek dienu iki kaledu
const tillKaledos = now.to('2023-12-25');
// console.log('tillKaledos ===', tillKaledos);

module.exports = {
  tillKaledos,
};
