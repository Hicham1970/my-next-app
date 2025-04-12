import React from 'react'

function NotFound() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <h2 className="font-bold text-6xl">404</h2>
        <h2 className="font-bold text-2xl">Page Not Found</h2>
        
        <p>Could not find the page you were looking for </p>
        
        <p>This is a custom Error Page Made by My Cares !!! </p>
      
      </main>
    
    </div>
  )
}

export default NotFound



