"use client"

import "./globals.css"; 
import { useState } from 'react' 

interface WrapperProps{
    children: React.ReactNode; 
}

const ErrorSimulator = ({
    message ="An error occured"
}: {
    message?: string;
    }) => {
    const [error, setError] = useState(false);

    if (error) throw new Error(message);

    return (
        <button
            title="Simulate An Error"
            className="bg-red-950 text-red-500 rounded p-1 leading-none front-semibold text-shadow-amber-300"
            onClick={()=>setError(true)}
        >
            Simulate Error

        </button>
    )
}

export const ErrorWrapper = ({ children }: WrapperProps) => {
    return (
        <div className="flex flex-col rounded-lg mt-8 relative p-4 border-grey-300">
            <div className="absolute top-0 left-4 -translate-y-0.5">
                <ErrorSimulator message="Simulated error in root Layout" />
            </div>
            {children}
        </div>
    )
}