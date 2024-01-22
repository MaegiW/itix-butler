import{Link} from 'react-router-dom'

function Signup() {
  return (
    <form className='border border-secondary p-5'>
        <h3>iTix行動管家</h3>
        <p className='fs-5'>申請新管理者</p>
        <div className='mb-2'>
            <label htmlFor='name'className='form-label'>店家名稱:</label>
            <input type='text' placeholder='膂盟大飯店' className='form-control'></input>
        </div>

        <div className='mb-2'>
            <label htmlFor='name'className='form-label'>您的姓名:</label>
            <input type='text' placeholder='王馬吉' className='form-control'></input>
        </div>

        <div className='mb-2'>
            <label htmlFor='phone'className='form-label'>您的手機:</label>
            <input type='text' placeholder='0911111111' className='form-control'></input>
        </div>

        <div className='mb-2'>
            <label id='email'className='form-label'>管理者郵件:</label>
            <input type='email' placeholder='maggie156@hihotel.com.tw' className='form-control'></input>
        </div>

        <div className='mb-2'>
            <label id='password'className='form-label'>管理者密碼:</label>
            <input type='password' placeholder='*******' className='form-control'></input>
        </div>

        <div className='mb-2 d-md-flex justify-content-md-end'>
            <button className='btn btn-primary'>申請</button>
        </div>
        
        <div className='mb-2 '>
            <a href='' className='me-5'>忘記密碼?</a>
            <button className='btn btn-primary  '>
            <Link to='/'>綁定</Link></button>
        </div>
    </form>
  )
}

export default Signup