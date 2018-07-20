import React from 'react'
import moment from 'moment'
import './DashboardPage.scss'

// Components
import { RejectedShifts } from '../RejectedShifts/RejectedShifts'
import { PendingShifts } from '../PendingShifts/PendingShifts'
import { AllShifts } from '../AllShifts/AllShifts'
import { Form } from '../Form/Form'

// Dummy Data
import { dummyShifts, dummyEmployee } from '../../../dummyData'

class DashboardPage extends React.Component {
  state = {
    allShifts: dummyShifts,
    employee: dummyEmployee,
    paginationWeekStart: moment().weekday(1).hours(0).minutes(0).seconds(0),
    paginationWeekEnd: moment().weekday(1).hours(0).minutes(0).seconds(0).add(7, 'days'),
    displayMessage: false
  }

  archiveRejectedShift = (shiftId) => {
    // 1. Store all the shifts in a new array
    const allShifts = this.state.allShifts

    // 2. Find shift in allShifts array
    const shiftToUpdate = allShifts.find((shift) => {
      return shift.id === shiftId
    })

    // 3. Update shift status
    shiftToUpdate.status = 'archived'

    // 4. Set new allShift state
    this.setState(() => {
      return {
        allShifts: allShifts
      }
    })
  }

  deletePendingShift = (shiftId) => {
    // 1. Store all the shifts in a new array
    const allShifts = this.state.allShifts

    // 2. Filter the shift from the array
    const updatedShifts = allShifts.filter((shift) => {
      return shift.id !== shiftId
    })

    // 3. Set new allShift state
    this.setState(() => {
      return {
        allShifts: updatedShifts
      }
    })
  }

  addShift = (newShiftObject) => {
    // Set new allShift state and display message
    this.setState((prevState) => {
      return {
        allShifts: prevState.allShifts.concat(newShiftObject),
        displayMessage: true
      }
    })

    setTimeout(() => {
      this.setState(() => {
        return {
          displayMessage: false
        }
      })
    }, 5000)
  }

  goBackOneWeek = () => {
    this.setState((prevState) => {
      return {
        paginationWeekStart: prevState.paginationWeekStart.subtract(7, 'days'),
        paginationWeekEnd: prevState.paginationWeekEnd.subtract(7, 'days')
      }
    })
  }

  goForwardOneWeek = () => {
    this.setState((prevState) => {
      return {
        paginationWeekStart: prevState.paginationWeekStart.add(7, 'days'),
        paginationWeekEnd: prevState.paginationWeekEnd.add(7, 'days')
      }
    })
  }

  render () {
    return (
      <div className='DashBoardPage'>

        <div className={this.state.displayMessage ? 'shift_added_message_active' : 'shift_added_message_hidden'}>Shift added successfully</div>

        <Form addShift={this.addShift} employee={this.state.employee}/>

        <RejectedShifts
          rejectedShifts={this.state.allShifts.filter((shift) => {
            return shift.status === 'rejected'
          })}
          archiveRejectedShift={this.archiveRejectedShift}
        />

        <PendingShifts
          pendingShifts={this.state.allShifts.filter((shift) => {
            return shift.status === 'pending'
          })}
          deletePendingShift={this.deletePendingShift}
        />
        <div className='pagination_container'>
          <button className='pagination_button' onClick={this.goBackOneWeek}>{'<'}</button>
          <span className='pagination_date'>{this.state.paginationWeekStart.format('DD MMM YYYY')}</span>
          <span className='dates_spacing'>-</span>
          <span className='pagination_date'>{this.state.paginationWeekEnd.format('DD MMM YYYY')}</span>
          <button className='pagination_button' onClick={this.goForwardOneWeek}>{'>'}</button>
        </div>

        <AllShifts allShifts={this.state.allShifts.filter((shift) => {
          return (shift.date >= this.state.paginationWeekStart && shift.date < this.state.paginationWeekEnd)
        })}/>

      </div>
    )
  }
}

export { DashboardPage }
