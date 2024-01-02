import React from 'react'
import Button from '../button/Button'
import CreateAccountHeader from '../components/CreateAccountHeader'
import InputField from '../components/inputField'

function CreateAccountStep4() {
    return (
        <div className='bg-black min-h-screen px-4 w-full'>
            <CreateAccountHeader step={4} />
            <p className="text-neutral-50 font-inter text-2xl font-bold">You’ll need a password</p>
            <p className="text-neutral-500 font-inter text-sm font-normal">Make sure it’s 8 characters or more</p>
            <div className="py-7 flex justify-end">
                <InputField placeholderText="Password"formatType=''/>
            </div>
            <a className="flex justify-end items-center fixed bottom-10 w-full pr-9" href="../src/Create_Your_Account_Step_4.html">
            <Button varient="default" size='lg' text='Next' bg='white' />
            </a>
        </div>
    )
}
export default CreateAccountStep4