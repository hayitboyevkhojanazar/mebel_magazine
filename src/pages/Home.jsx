import React from 'react'
import ImageLoop from '../components/ImgLoop'
import Header from '../components/Header'
import SpecialCards from '../components/SpecialCards'

const Home = () => {
  return (
    <div className='flex flex-col gap-16 text-color6'>
      <div className=''>
        <ImageLoop/>
      </div>
      <SpecialCards />
    </div>
  )
}

export default Home