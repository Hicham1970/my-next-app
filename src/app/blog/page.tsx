import React from 'react'; 
import {Metadata} from 'next'; 

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog description',
};



export default async function BlogPage() {
  await new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve('Un retard attentionnel!!!')
    },2000)
  })
  return (
    <div className="flex justify-center items-center h-screen  text-2xl ">Loading</div>
  )
}