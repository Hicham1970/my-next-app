import React from 'react'
import Link from 'next/link'


export const metadata = {
    title: {
        absolute: "About"
    }
}
function AboutPage() {
    return (<>
        <div>About Metadata Page</div>
        <Link href="/">Home</Link>
    </>
    )
}
export default AboutPage




