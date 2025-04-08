import React from 'react'

async function NaviresPage({params}: {params: Promise<{slug: string[]}>
}) {
  const {slug} = await params;
  if(slug?.length === 2){
  return (
    <h1 className="flex items-center justify-center 
    color-black mt-40 font-size-45 ">Viewing doncs for 
    feature {slug[0]} and concept {slug[1]}</h1>
  )
}else if(slug?.length === 1){
  return(
    <h1 className="flex items-center justify-center 
    color-black mt-40 font-size-45 ">Viewing doncs for 
    feature {slug[0]} only</h1>
  )

}
return <h1>Ici c'est la page des navires obtenue en utilisant le catch all optional [[...slug]]</h1>
}



export default NaviresPage


