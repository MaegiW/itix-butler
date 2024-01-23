import React from 'react'

function CustomInput({type, placeholder , htmlFor, labelText}) {

  return (

   <div className='mb-2'>           
        <label htmlFor={htmlFor} className='form-label'>{labelText}</label>
        <input type={type} placeholder={placeholder} className={`form-control`}></input>
    </div>
  )
}

export default CustomInput