import React from 'react'

export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string, reviewId: string }>;
}
) {
    const { productId, reviewId } = await params;
    return (
        <>
            <h1>Review {reviewId} for Product {productId} </h1>
            <div>
                The nested dynamic route inside a nested dynamic route is used
                to display a specific review for a specific product.
                Maintenant tu peut chercher:
                <a href={`http://localhost:3000/Produits/${productId}/reviews/${reviewId}`}>http://localhost:3000/Produits/{productId}/reviews/{reviewId} par exemple.</a>
            </div>
        </>
    )
}
