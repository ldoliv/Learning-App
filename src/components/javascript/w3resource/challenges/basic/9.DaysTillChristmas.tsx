import React from 'react'


function calcDaysTillChristmas() {

  const today = new Date();

  let christmas: Date = new Date(today.getFullYear(), 11, 25);
  // let christmas = new Date(today.getFullYear() + '/12/25');  // <- also works
  // let christmas = new Date('12/25/' + today.getFullYear());  // <- also works
  
  if (christmas.getTime() < today.getTime()) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const daysDiff = Math.floor((christmas.getTime() - today.getTime()) / oneDay)

  return daysDiff;
}

const DaysTillCristmas = () => {

  const daysLeft = calcDaysTillChristmas()

  return (
    <div>Days left until christmas: {daysLeft}</div>
  )
}

export default DaysTillCristmas