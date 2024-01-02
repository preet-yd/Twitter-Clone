import React from 'react'
import PropTypes from 'prop-types';

export function InputField({
  placeholderText = "Placeholder",
  formatType = "text"
  }) {
  

  function handleTextChange(e) {
    console.log(e.target.value)
  }
  return (
    <div className='w-full py-2'>
      <fieldset className="group flex items-center self-stretch h-16 px-3 py-4 gap-2.5 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
        <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">{placeholderText}</legend>
        <input
          type= {formatType}
          placeholder={placeholderText}
          // onChange={handleTextChange}
          className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-transparent outline-none placeholder:text-neutral-500" />
      </fieldset>
    </div>
  )
}
InputField.propTypes = {
  text : PropTypes.string,
  placeholder : PropTypes.string,
}

export default InputField