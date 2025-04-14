import React from 'react'
import { Metadata } from 'next';



// create the props type:
type props ={
    params: Promise <{productId: string}>
}

// Dynamic function to export metadata:
export const generateMetadata=async({params}: props) :Promise<Metadata>=>{

    const id = (await params).productId;
    return {
        title: `Products Details Page ${id}`,
    }
}

export default async function ProductsDetails({params}: props) {
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



