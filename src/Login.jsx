import CustomInput from './components/CustomInput'
import CustomButton from './components/CustomButton'

function Login() {
    const handleButtonClick =()=>{
        console.log("button Clicked~!");
    }

  return (
    <form className='border border-secondary p-5'>
        <h3>iTix行動管家</h3>
        <p className='fs-5'>管理帳號綁定</p>
        
        <CustomInput htmlFor='id' labelText='店家帳號:' type='id' placeholder='lemoncx'/>
    
        <CustomInput htmlFor='email' labelText='管理者帳號:' type='email' placeholder='maggie156@hihotel.com.tw'/>

        <CustomInput htmlFor='password' labelText='管理者密碼:' type='password' placeholder='*******'/>

        <div className='mb-2'>
           <a href='' className='me-5'>忘記密碼?</a>
            <CustomButton buttonText='綁定' to='/checkin' onClickHandler={handleButtonClick} />
        </div>
        
        <div className='mb-2 '>
           <a href='' className='me-4'>申請新管理者</a>
            <CustomButton buttonText='申請' to='/signup' onClickHandler={handleButtonClick} />
        </div>
    </form>
  )
}

export default Login