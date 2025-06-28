import React from 'react'

const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <img src="/loadingicon.png" className="h-20 w-20 animate-pulse" /><br/>
        <div className='text-black text-center mx-auto px-8'>❤️Bringing nature to your screen... Please hold on.</div>
    </div>
  )
}

export default Loader