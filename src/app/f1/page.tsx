import React from 'react'
import Link from 'next/link'
function F1() {
    return (
        <>
            <h1 className="text-3xl font-bold underline text-red-500">
                F1 Page
            </h1>
            <div className="flex flex-col gap-4 mt-4">
                <Link href="/f1/f2" className="text-blue-500 hover:underline">
                    F2
                </Link>
                <Link href="/f3" className="text-blue-500 hover:underline">
                    F3
                </Link>

            </div>
        </>
    )
}

export default F1
