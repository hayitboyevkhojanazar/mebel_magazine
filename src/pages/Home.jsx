import React from 'react'
import ImageLoop from '../components/ImgLoop'
import Card from '../components/Card'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='text-color6'>
      <div className=''>
        <ImageLoop/>
      </div>
      <Card/>
    </div>
  )
}

export default Home