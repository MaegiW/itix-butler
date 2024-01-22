import React, { useState } from 'react'

function DateSelector() {
  const [selectDate , setSelectDate] = useState('')

  const handleDateChange  = (e) =>{
    setSelectDate(e.target.value)
  }

  return (
    <select name="date" id="date" value={selectDate} onChange={handleDateChange}>
        <option value="2024-01-15">2024-01-15</option>
        <option value="2024-01-16">2024-01-16</option>
        <option value="2024-01-17">2024-01-17</option>
        <option value="2024-01-18">2024-01-18</option>
    </select>
  )
}

export default DateSelector