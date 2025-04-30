import React from 'react'
import Link from 'next/link'
function F2() {
    return (
        <>
            <h1 className="text-3xl font-bold underline text-red-500">
                F2 Page

            </h1>
            <div>
                <Link href="/f4" className="text-blue-500 hover:underline">F4</Link>
                <Link href="/f5" className="text-yellow-500 hover:underline">F5</Link>
            </div>
        </>
    )
}

export default F2
