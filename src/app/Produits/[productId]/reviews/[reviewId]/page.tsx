import React from 'react';
import { notFound, redirect } from 'next/navigation';

interface ProductReviewParams {
    productId: string;
    reviewId: string;
}


// fonction de generation de nombres:
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}



export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
    // appele de la fonction getRandomInt()
    const randomInt = getRandomInt(2);
    console.log(randomInt);
    if (randomInt === 1) {
        throw new Error('Something went wrong in loading in [reviewId]/page.tsx!');
    }
    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 1000) {
        notFound(); // c'est la page notFound qui se trouve dans [reviewId]\notFound.tsx
        // redirect('/Produits');
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