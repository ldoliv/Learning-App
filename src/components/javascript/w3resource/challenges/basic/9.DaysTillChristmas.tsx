import React from 'react'


function calcDaysTillChristmas() {

  const today = new Date();

  const christmas = new Date(today.getFullYear(), 11, 25)

  if (today.getMonth() === 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1)
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const daysDiff = Math.ceil((christmas.getTime() - today.getTime()) / oneDay)

  return daysDiff;
}

const DaysTillCristmas = () => {

  const daysLeft = calcDaysTillChristmas()

  return (
    <div>Days left until christmas: {daysLeft}</div>
  )
}

export default DaysTillCristmas