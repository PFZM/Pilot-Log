const {intervalToDuration, parseISO} = require('date-fns');

const calcTime = (startTime, endTime) => {
  const st = parseISO(startTime)
  const et = parseISO(endTime)
  console.log(st)
  console.log(et)
  return intervalToDuration({start: st, end: et})
}
module.exports = calcTime;

