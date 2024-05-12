'use client';
import { Button } from '@nextui-org/react'
import React from 'react'
import { FormStatus, useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <div className="flex flex-col items-start col-span-1 md:col-span-2">
            <Button type='submit' className="md:w-[200px]" isLoading={pending} >Submit</Button>

        </div>
    )
}

export default SubmitButton