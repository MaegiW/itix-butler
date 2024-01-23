import DateChickIn from './components/DateChickIn'
import { useState } from 'react'
import NavButton from './components/NavButton'
import CustomButton from './components/CustomButton';

function Checkin() {
  const [activePage, setActivePage] = useState('/checkin');
  
  const buttons = [
    {to:'/checkin' , text:'報到' , isActive :activePage ==='/checkin' },
    {to:'/scan' , text:'掃描' , isActive :activePage ==='/scan' },
    {to:'/writeoff' , text:'核銷' , isActive :activePage ==='/writeoff' },
    {to:'/report' , text:'報表' , isActive :activePage ==='/report' },
  ]

  return (
    <div className='border container'>
      <div className='border-secondary p-5'>
        <h3>iTix行動管家</h3>
        <p className='fs-5'>預約報到管理</p>
        <DateChickIn/>

        <div>
          <div className='mt-3 d-md-flex justify-content'>
              <p className='me-4'>陳'r: xxx985(3位)</p>
              <CustomButton buttonText='報到' />
          </div>

          <div className='mt-3 d-md-flex justify-content'>
              <p className='me-4'>陳's: xxx123(2位)</p>
              <CustomButton buttonText='報到' />
          </div>

          <div className='mt-3 d-md-flex justify-content'>
              <p className='me-4'>許's: xxx112(2位)</p>
              <button className='btn btn-secondary'>報到</button>
          </div>
        </div>
    </div>
    
    <NavButton buttons={buttons}/>
    </div>
  )
}

export default Checkin