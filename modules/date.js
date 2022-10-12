/* eslint-disable no-undef */

const date = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_MED);
const sec = luxon.DateTime.local().c.second;
const min = luxon.DateTime.local().c.minute;
const { hour } = luxon.DateTime.local().c;
export {
  date, hour, min, sec,
};