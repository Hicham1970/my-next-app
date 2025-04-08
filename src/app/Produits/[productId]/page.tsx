import React from 'react'

export default async function ProductsDetails({
    params,
}: {
    params: Promise<{productId: string}>;
}) {
    const productId = (await params).productId;
    return (
        <>
            <div>Products Details {productId} </div>
            <div>
                in Nextjs the [folder] is traited as a dynamic route http://localhost:3000/Produits/id ,
                the id can be remplaced by any string or number or a mixte of both.
            </div>
        </>
    )
}



