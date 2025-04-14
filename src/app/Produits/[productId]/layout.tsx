import React from 'react'

function ProductsDetailsLayout({ children }: {
        children: React.ReactNode;
}) {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-700">Features Products ; une phrase qui provient du layout.tsx qui se trouve 
                dans le dossier produits http://localhost:3000/Produits/[productId]/layout.tsx  
            </h1>
            {children}
        </div>
    )
}

export default ProductsDetailsLayout