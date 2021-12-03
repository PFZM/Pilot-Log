const {format, parseISO, intervalToDuration} = require('date-fns');


const calcTime = (startTime, endTime) => {
  return intervalToDuration({start: startTime, end: endTime})
}

module.exports = {
  formatDate: (date) => {
      return format(date, 'do MMM yyyy')
  }
  
}, calcTime;

