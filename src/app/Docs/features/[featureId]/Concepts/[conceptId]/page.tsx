import React from 'react'

export default async function Concept({
    params,
}: {
    params: Promise<{featureId: string, conceptId: string}>;
}) {
    const {featureId, conceptId} = await params;
    return (
        <div className="flex items-center justify-center color-black mt-40 font-size-45 ">The document withe the 
            feature {featureId} and the concept {conceptId} 
            can be reach with the 
            url : localhost:3000/docs/
            features/{featureId}/concepts/{conceptId}</div>
    )
}


