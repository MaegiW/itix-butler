import{Link} from 'react-router-dom'
import './App.css'
import DateSelector from './components/DateSelector';

function Report() {

    const datetime = [
        { time: '11:00', reservation: 14, checkIn: 14 },
        { time: '12:00', reservation: 11, checkIn: 11 },
        { time: '14:00', reservation: 5, checkIn: 2 },
        { time: '16:00', reservation: 4, checkIn: 0 },
      ];
  return (
    <div className='area border container, '>
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
        

        <div className='mt-5 d-flex justify-content-around'>
            <Link to='/checkin' className="btn btn-primary">報到</Link>
            <Link to='/scan' className="btn btn-primary">掃描</Link>
            <Link to='/writeoff' className="btn btn-primary">核銷</Link>
            <Link to='/report' className="btn btn-primary">報表</Link>
        </div>
  </div>


  )
}

export default Report