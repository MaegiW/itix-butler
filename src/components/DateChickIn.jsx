import React, { useState } from 'react'

function DateChickIn() {
    const [selectChickinDate , setSelectChickinDate] = useState('')
    const handleChickinDate = (e) =>{
        setSelectChickinDate(e.target.value)
    }

  return (
    <select name="date" id="date" value={selectChickinDate} onChange={handleChickinDate}>
          <option value="2024-01-15-2pm(7位)">2024-01-15-2pm(7位)</option>
          <option value="2024-01-15-2pm(2位)">2024-01-15-2pm(2位)</option>
          <option value="2024-01-15-2pm(2位)">2024-01-15-2pm(2位)</option>
          <option value="2024-01-15-2pm(2位)">2024-01-15-2pm(2位)</option>
        </select>
  )
}

export default DateChickIn