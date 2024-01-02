import React from 'react'

import Button from '../button/Button'
import CreateAccountHeader from '../components/CreateAccountHeader'
import InputField from '../components/inputField'
import DOBFieldSet from '../components/DOBFieldSet'

function CreateAccountStep1() {
    return (
        <div className='bg-black min-h-screen px-4 w-full'>
            <div>
                <CreateAccountHeader step={1} />
                <main className='w-full'>
                    <div className="flex items-start flex-col gap-5 w-full self-stretch">
                        <p className="text-neutral-50 font-inter text-2xl font-bold leading-normal">Create your account</p>
                        <InputField placeholderText="Name" />
                        <InputField placeholderText="Email" />
                        <div className="gap-0">
                            <p className="text-neutral-50 font-inter text-15px font-bold leading-normal ">Date of birth</p>
                            <p className="text-step-1-text-color self-stretch text-sm font-normal leading-normal  ">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                        </div>
                        <DOBFieldSet />
                    </div>
                    <a className="flex justify-end items-center fixed bottom-10 w-full pr-9" href="../src/Create_Your_Account_Step_2.html">
                        <Button varient = "default" size='lg' text='Create Account' />                    
                    </a>
                </main>
            </div>

        </div>
    )
}

export default CreateAccountStep1