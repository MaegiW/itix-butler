import{Link} from 'react-router-dom'

function Scan() {
    const order = {
        orderNumber: '#123',
        name: '陳先生',
        phoneNumber: '0911XXX777',
        numberOfPeople: '2大',
        ticketCount: '2張',
        reservationTime: '2024-01-15-12:30',
        checkInStatus: '未報到',

    }
  return (
    <div className='border container'>
        <div className='border-secondary p-5'>
            <h3>iTix行動管家</h3>
            <p className='fs-5'>掃瑪查詢</p>
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
            <p>預約 : {order.reservationTime}</p>
            <p>報到 : {order.checkInStatus}</p>
        </div>

        <div className='mt-5 d-flex justify-content-around'>
            <Link to='/checkin' className="btn btn-primary">報到</Link>
            <Link to='/scan' className="btn btn-primary">掃描</Link>
            <Link to='/writeoff' className="btn btn-primary">核銷</Link>
            <Link to='/report' className="btn btn-primary">報表</Link>
        </div>

    </div>
  )
}

export default Scan