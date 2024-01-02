import React from 'react'
import PropTypes from 'prop-types';
import cross from '../image/create-account-1-signup-x.svg'

function CreateAccountHeader({step = 1}) {
    return (
        <header>
            <div className="flex items-center py-3 gap-5 self-stretch ">
                <a href="../src/index.html">
                    <img className="w-6 h-6" src={cross} alt="cross" />
                </a>
                <p className="text-neutral-50 font-inter text-15px font-bold leading-normal"> Step {step} of 4 </p>
            </div>
        </header>
    )
}
CreateAccountHeader.propTypes = {
    step : PropTypes.oneOf([1,2,3,4])
}

export default CreateAccountHeader