import { Loader } from 'lucide-react'
import React from 'react'

function Loading() {
  return (
   <div className='h-screen flex justify-center items-center'>
      <Loader className='animate-spin'/>
   </div>
  )
}

export default Loading