import { Link } from "react-router-dom";

function CustomButton({buttonText, to, onClickHandler, isDisavled}) {
  return (
    <button 
    className={`btn btn-primary `} 
    onClick={onClickHandler} 
    disabled={isDisavled}>
      <Link to ={to} style={{ color: 'white' }}>{buttonText}</Link>
      </button>
  )
}

export default CustomButton