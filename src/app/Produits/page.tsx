import React from 'react'
import Link from 'next/link'

function ProductsList() {
  const productId = 123;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center 
    min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Products Page</div>
      <Link href="/">Home</Link>
      <Link href="/Produits/1">Produit1</Link>
      <Link href="/Produits/2">Produit2</Link>
      <Link href="/Produits/3" replace>Produit3</Link>
      <Link href="/Produits/4">Produit4</Link>
      <Link href="/Produits/5">Produit5</Link>
      <Link href="/Produits/6">Produit6</Link>
      <Link href={`/Produits/${productId}`}>Produit {productId}</Link>
    </div>
  )
}

export default ProductsList 

