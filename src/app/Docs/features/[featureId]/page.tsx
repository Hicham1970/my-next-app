import React from 'react'

export default async function DocumentFeature({
    params,
}: {
    params: Promise<{featureId: string}>;
}) {
    const featureId = (await params).featureId;
    return (
        <>
            <div>Document's Feature is as follows:  {featureId}</div>
        </>
    )
}
           


