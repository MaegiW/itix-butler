import NavButton from './components/NavButton'
import { useState } from 'react'

function Writeoff() {
    const order = {
        orderNumber: '#123',
        name: '陳先生',
        phoneNumber: '0911XXX777',
        numberOfPeople: '2大',
        ticketCount: '2張',
        ticketName: '情人節下午茶組合',
        reservationTime: '2024-01-15-12:30',
        checkInStatus: '未報到',
    }
    const [button , seteButton] = useState('/writeoff')
    const buttons = [
      {to:'/checkin' , text:'報到' , isActive:button ==='/checkin' },
      {to:'/scan' , text:'掃描' , isActive:button ==='/scan' },
      {to:'/writeoff' , text:'核銷' , isActive:button ==='/writeoff' },
      {to:'/report' , text:'報表' , isActive:button ==='/report' },
    ]
    
  return (
    <div className='border container'>
        <div className='border-secondary p-5'>
            <h3>iTix行動管家</h3>
            <p className='fs-5'>核銷管理</p>
            <div>
                <img src="https://fakeimg.pl/200/"></img>
            </div>
        </div>
        
        <div>
            <p>訂單 : {order.orderNumber}</p>
            <p>姓名 : {order.name}</p>
            <p>電話 : {order.phoneNumber}</p>
            <p>人數 : {order.numberOfPeople}</p>
            <p>票數 : {order.ticketCount}</p>
            <p>購買 : {order.ticketName}</p>
            <p>預約 : {order.reservationTime}</p>
            <p>報到 : {order.checkInStatus}</p>
        </div>

        <div className='d-flex justify-content-around'>
            <button className='btn btn-primary'>核銷</button>
            <button className='btn btn-primary'>反核銷</button>
        </div>
    
        <NavButton buttons={buttons}/>

    </div>
  )
}

export default Writeoff