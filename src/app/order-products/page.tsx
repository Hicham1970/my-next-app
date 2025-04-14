"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

function OrderProducts() {
    const router = useRouter();
    function handleClick() {
        alert('Order placed!');
        // utiliser le router pour NAVIGUER AUTOMATIQUEMENT vers une page
        router.push('/'); // on choisit ou on va donner le cap 
        // router.replace('/'); // vers home page 
        // router.back(); // retour vers l'arrière
        // router.refresh(); // reste sur la même page
    }
    return (<>
        <div>Order Products</div>
        <button onClick={handleClick}>Place Order</button>
    </>)
}


export default OrderProducts