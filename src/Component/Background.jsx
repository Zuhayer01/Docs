import React from 'react'

function Background() {
  return (
    <>
    <div id="background" className='relative z-[2] w-full h-screen bg-zinc-800'>
        <div id="navbar" className='w-full py-5  flex items-center justify-center absolute top-[5%]'>
          <h2 className='font-extrabold text-zinc-700 text-xl'>Documents</h2>
        </div>
        <h1 className='leading-none tracking-tight -translate-x-[50%] -translate-y-[50%] absolute top-1/2 left-1/2 text-[10vw] font-semibold'>Docs.</h1>
      </div>
    </>
  )
}

export default Background