import React from 'react'

const Services = () => {
  return (
    <div>
      <button>Add service</button>
      <form>
        <select>
          <option>servicing</option>
          <option>Repair</option>
        </select>
        <label>cost</label>
        <input value={50}></input>
        <h1>Total</h1>
      </form>
    </div>
  )
}

export default Services