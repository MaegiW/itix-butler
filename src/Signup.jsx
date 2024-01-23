import CustomInput from './components/CustomInput'
import CustomButton from './components/CustomButton'

function Signup() {
    const handleButtonClick =()=>{
        console.log("button Clicked~!");
    }

  return (
    <form className='border border-secondary p-5'>
        <h3>iTix行動管家</h3>
        <p className='fs-5'>申請新管理者</p>
        
        <CustomInput htmlFor='name' labelText='店家名稱:' type='text' placeholder='膂盟大飯店'/>

        <CustomInput htmlFor='name' labelText='您的姓名:' type='text' placeholder='王馬吉'/>

        <CustomInput htmlFor='phone' labelText='您的手機:' type='text' placeholder='0911111111'/>

        <CustomInput htmlFor='email' labelText='管理者郵件:' type='email' placeholder='maggie156@hihotel.com.tw'/>
    
        <CustomInput htmlFor='password' labelText='管理者密碼:' type='password' placeholder='*******' />


        <div className='mb-2 d-md-flex justify-content-md-end'>
            <CustomButton buttonText='申請' to='/checkin' onClickHandler={handleButtonClick} />
        </div>
        
        <div className='mb-2 d-md-flex justify-content-md-end'>
            <a href='' className='me-5'>忘記密碼?</a>
            <CustomButton buttonText='綁定' to='/' onClickHandler={handleButtonClick} />
        </div>
    </form>
  )
}

export default Signup