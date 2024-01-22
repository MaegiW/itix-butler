import{Link} from 'react-router-dom'

function Login() {

  return (
    <form className='border border-secondary p-5'>
        <h3>iTix行動管家</h3>
        <p className='fs-5'>管理帳號綁定</p>
        <div className='mb-2'>
            <label id='id'className='form-label'>店家帳號:</label>
            <input type='id' placeholder='lemoncx' className='form-control'></input>
        </div>
        <div className='mb-2'>
            <label id='email'className='form-label'>管理者帳號:</label>
            <input type='email' placeholder='maggie156@hihotel.com.tw' className='form-control'></input>
        </div>
        <div className='mb-2'>
            <label id='password'className='form-label'>管理者密碼:</label>
            <input type='password' placeholder='*******' className='form-control'></input>
        </div>

        <div className='mb-2'>
           <a href='' className='me-5'>忘記密碼?</a>
           <button className='btn btn-primary'>
            <link to='/'></link>綁定</button>
        </div>
        
        <div className='mb-2 '>
           <a href='' className='me-4'>申請新管理者</a>
           <button className='btn btn-primary'>
            <Link to='/signup'>申請</Link></button>
        </div>
    </form>
  )
}

export default Login