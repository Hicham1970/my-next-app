import React from 'react'
import Link
    from 'next/link'
function InnerF2() {
    return (
        <>
            <h1 className="text-3xl font-bold underline text-red-500">
                Inner F2
            </h1>
            <Link href="/f5" className="text-blue-500 hover:underline">F5</Link>
        </>
    )
}

export default InnerF2
