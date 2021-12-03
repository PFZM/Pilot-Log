const {format, parseISO, intervalToDuration} = require('date-fns');


const calcTime = (startTime, endTime) => {
  return intervalToDuration({start: startTime, end: endTime})
}

module.exports = {
  formatDate: (date) => {
      return format(date, 'do MMM yyyy')
  },
  formatDate2: (date) => {
    return format(date, 'yyyy-MM-dd')
  }
}

