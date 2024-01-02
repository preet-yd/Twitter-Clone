import React from 'react'
import Button from '../button/Button'
import CreateAccountHeader from '../components/CreateAccountHeader'
import InputField from '../components/inputField'

function CreateAccountStep3() {
    return (
        <div className='bg-black min-h-screen px-4 w-full'>
            <CreateAccountHeader step={3} />
            <p className="text-neutral-50 font-inter text-2xl font-bold">We sent you a code</p>
            <p className="text-neutral-500 font-inter text-sm font-normal">Enter it below to verify janedoe@gmail.com</p>
            <div className="py-7">
                <InputField placeholderText="Verification Code" />
                <p class="flex justify-end w-full text-twitter-blue font-inter text-sm font-normal">Didn’t receive a code?</p>
            </div>
            <a className="flex justify-end items-center fixed bottom-10 w-full pr-9" href="../src/Create_Your_Account_Step_4.html">
            <Button varient="default" size='lg' text='Next' bg='white' />
            </a>
        </div>
    )
}
export default CreateAccountStep3