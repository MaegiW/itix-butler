import{Link} from 'react-router-dom'
import DateChickIn from './components/DateChickIn'

function Checkin() {
  return (
    <div className='border container'>
      <div className='border-secondary p-5'>
        <h3>iTix行動管家</h3>
        <p className='fs-5'>預約報到管理</p>
        <DateChickIn/>

        <div>
          <div className='mt-3 d-md-flex justify-content'>
              <p className='me-4'>陳'r: xxx985(3位)</p>
              <button className='btn btn-primary'>報到</button>
          </div>

          <div className='mt-3 d-md-flex justify-content'>
              <p className='me-4'>陳's: xxx123(2位)</p>
              <button className='btn btn-primary'>報到</button>
          </div>

          <div className='mt-3 d-md-flex justify-content'>
              <p className='me-4'>許's: xxx112(2位)</p>
              <button className='btn btn-secondary'>報到</button>
          </div>
        </div>
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

export default Checkin