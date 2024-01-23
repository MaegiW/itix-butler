import { Link } from 'react-router-dom'

function NavButton({buttons}) {
  console.log(buttons);

  return (
    <div className='mt-5 d-flex justify-content-around'>
        {buttons.map((button, i)=>(
            <Link 
            key={i} 
            to={button.to} 
            className={`btn ${button.isActive ? 'btn btn-secondary' : 'btn btn-primary'}`}>
              {button.text}
            </Link>
        ))}
    </div>
  )
}

export default NavButton
