import React from 'react';
import { ShiftCard } from '../ShiftCard/ShiftCard'

const PendingShifts = ({ pendingShifts, deletePendingShift }) => {

  const pendingShiftsSorted = pendingShifts.sort(function (a, b) {
    return b.date - a.date;
  })

  return (
    <div>
      <h2>Pending Shifts</h2>
      {pendingShiftsSorted.map((shift, index) => {
        return <ShiftCard key={index} shift={shift} deletePendingShift={deletePendingShift}/>
      })}
    </div>
  )
}

export { PendingShifts }