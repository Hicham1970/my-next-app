"use client"

import React from 'react'; 
import {useRouter} from 'next/navigation'
import { startTransition } from 'react';

export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {  
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh(); 
            reset();
        })
    }
    return (
        <div>
            <div className="flex items-center 
        justify-center text-red-500">
                {error.message}
            </div>
            <button className="button border-6 cursor-grab p-3 bg-amber-500 text-3xl font-bold " onClick={reload}>Try Again</button>
        </div>
    )
}


