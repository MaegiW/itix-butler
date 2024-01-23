import './App.css'
import DateSelector from './components/DateSelector';
import { useState } from 'react'
import NavButton from './components/NavButton';

function Report() {

    const datetime = [
        { time: '11:00', reservation: 14, checkIn: 14 },
        { time: '12:00', reservation: 11, checkIn: 11 },
        { time: '14:00', reservation: 5, checkIn: 2 },
        { time: '16:00', reservation: 4, checkIn: 0 },
      ];

      const [button , seteButton] = useState('/report')
      const buttons = [
        {to:'/checkin' , text:'報到' , isActive:button ==='/checkin' },
        {to:'/scan' , text:'掃描' , isActive:button ==='/scan' },
        {to:'/writeoff' , text:'核銷' , isActive:button ==='/writeoff' },
        {to:'/report' , text:'報表' , isActive:button ==='/report' },
      ]
      
  return (
    <div className='area border container'>
        <div className='border-secondary p-5'>
            <h3>iTix行動管家</h3>
            <p className='fs-5'>核銷報表</p>
            <DateSelector/>
        </div>

            {datetime.map((value, i) => (
            <div key={i} className=' d-flex justify-content-around'>
            <p>{value.time}</p>
            <p>預約</p>
            <p>{value.reservation}位</p>
            <p>報到</p>
            <p>{value.checkIn}位</p>
            </div>
        ))}
        

        <NavButton buttons={buttons}/>
  </div>


  )
}

export default Report