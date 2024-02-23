import React from 'react'

export default function Time({timeData}) {
  return (
    <>
    {timeData && (
      <div className='bg-green-400 mt-5 flex flex-col items-center justify-center px-5 py-2 rounded-lg'>
      <h1>Date and Time</h1>
      <h1 className=' font-light'>(YYYY-MM-DD) | (24 hrs)</h1>
      <h1 className='mt-3 text-xl font-semibold'>{timeData.location.localtime}</h1>
    </div>
    )}
    </>
  )
}
