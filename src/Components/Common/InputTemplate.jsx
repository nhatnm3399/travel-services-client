import React from 'react'

const InputTemplate = ({className, onChange, value, placeholder, type}) => {
  return (
    <input type={type} onChange={onChange} value={value} className={className} placeholder={placeholder} />
  )
}

export default InputTemplate