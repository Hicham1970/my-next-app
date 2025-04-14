import React from 'react'
import Link from 'next/link'


// async for server component , NB use the hook {use} for the client side component.supprime async & await et
// remplace await par use . 
// params is a promise that resolves to an object with the articleId property
// searchParams is a promise that resolves to an object with the lang property
// params and searchParams are used to get the articleId and lang from the URL

export default async function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: "en" | "fr" | "es" }>
}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;
    return (
        <div className="flex items-center justify-items-center 
             pb-6 gap-16 sm:p-20 ">
            <h1>News Article {articleId}</h1>
            <p>Reading in {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>Lire en français</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Leer en español</Link>
            </div>
        </div>
    )
}
