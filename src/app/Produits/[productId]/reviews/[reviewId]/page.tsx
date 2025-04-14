import React from 'react'; 
import {notFound, redirect} from 'next/navigation';

interface ProductReviewParams {
    productId: string;
    reviewId: string;
}

export default async function ProductReview({
    params,
}: {
    params: ProductReviewParams;
}) {
    const { productId, reviewId } = params;

    if (parseInt(reviewId) > 1000) {
        // notFound(); // c'est la page notFound qui se trouve dans [reviewId]\notFound.tsx
        redirect('/Produits');
    }

    return (
        <>
            <h1>Review {reviewId} for Product {productId}</h1>
            <div>
                The nested dynamic route inside a nested dynamic route is used
                to display a specific review for a specific product.
                Maintenant tu peut chercher:
                <a href={`http://localhost:3000/Produits/${productId}/reviews/${reviewId}`}>
                    http://localhost:3000/Produits/{productId}/reviews/{reviewId}
                </a>
            </div>
        </>
    );
}