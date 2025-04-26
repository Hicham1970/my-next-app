"use client" // Error Boyndaries must be Client Component

import "./globals.css"; 

export default function GlobalError() {
    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center min-h-screen "
                >
                    <h2 className="text-2xl font-bold mb-4">Something went Wrong</h2>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                            // Refresh the page:
                            window.location.reload();
                        }}

                    >Refresh</button>
                </div>
            </body>
        </html>
        
    )
}