import React from 'react'

function InputField(props) {

  function handleTextChange(e) {
    console.log(e.target.value)
  }
  return (
    <div>
      <fieldset className="group flex items-center self-stretch h-16 px-3 py-4 gap-2.5 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
        <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">Name</legend>
        <input type="text" placeholder="Name" onChange={handleTextChange} className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-transparent outline-none placeholder:text-neutral-500" />
      </fieldset>
    </div>
  )
}

export default InputField