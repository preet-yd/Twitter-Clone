import React from 'react'
import Button from '../button/Button'
import CreateAccountHeader from '../components/CreateAccountHeader'
import InputField from '../components/inputField'

function CreateAccountStep2() {
    return (
        <div className='bg-black min-h-screen px-4 w-full'>
            <CreateAccountHeader step={2} />
            <p className="text-neutral-50 font-inter text-2xl font-bold leading-normal">Create your account</p>
            <InputField placeholderText="Name" />
            <InputField placeholderText="Email" />
            <InputField placeholderText="Date Of Birth" />

            <a className="flex justify-end items-center fixed bottom-10 w-full pr-9" href="../src/Create_Your_Account_Step_2.html">
                <Button varient="default" size='lg' text='Sign Up' bg='blue' />
            </a>
        </div>
    )
}

export default CreateAccountStep2