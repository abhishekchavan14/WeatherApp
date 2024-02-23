import React, { useState } from 'react'
import SearchField from './components/SearchField'
import DisplayField from './components/DisplayField'
import Time from './components/Time'

export default function Weather() {

    const[data, setData] = useState('')
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
    <SearchField setData={setData}/>
    <DisplayField weatherData={data} />
    <Time timeData={data}/>
    </div>
  )
}
