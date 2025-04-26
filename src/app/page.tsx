import Link from "next/link";


export default function Home() {
  return (<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    
       
      <h1 className="font-bold text-6xl">Welcome to the home page of the app 🙌</h1> 
    <div className="flex gap-[32px] font-bold text-2xl">
        <Link className="hover:text-4xl" href="/about">About</Link>
        <Link href="/navires">Navires</Link>
        <Link href="/Produits">Produits</Link>
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Lire en français</Link>
      </div>
      </main>
    </div>
  );
}
