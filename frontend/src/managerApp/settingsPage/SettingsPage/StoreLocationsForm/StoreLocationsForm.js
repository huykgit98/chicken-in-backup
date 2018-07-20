import React from 'react'
import LocationList from './LocationList'

class StoreLocationsForm extends React.Component {
  state = {
    newLocations: '',
    locations: ['Highvale', 'Doncaster', 'Springvale']
  }

  onChange = (e) => {
    this.setState({newLocations: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      newLocations: '',
      locations: [...this.state.locations, this.state.newLocations]
    })
    console.log(this.state)
  }

  handleDelete = (e) => {
    const locationToRemove = e.target.value

    this.setState(() => {
      const locations = this.state.locations
      const locationsWithoutRemoved = locations.filter(locations => locations !== locationToRemove)
      return {
        locations: locationsWithoutRemoved
      }
    })
  }

  checkState = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <div className='card-container'>
        <header className="card-header">
          <h2>Current Locations</h2>
        </header>
        <div className="card-content-settings">
          <section className='location-adder'>
            <form onSubmit={this.handleSubmit}>
              <div className="loc-input">
                <input value={this.state.newLocations} onChange={this.onChange} placeholder='Store location...' type='text' required/>
              </div>
              <div className='loc-submit'>
                <input type='submit' value='Create New Store'/>
              </div>
            </form>
          </section>
         
          <section className='locations-list'>
            <div className="title-card">
              <h2>Current Locations</h2>
            </div>
            <LocationList className='loc-list' locations={this.state.locations} handleDelete={this.handleDelete} />
          </section>
        </div>
        {/* <button onClick={this.checkState}>
          check state
        </button> */}
      </div>
    )
  }
}

export default StoreLocationsForm
