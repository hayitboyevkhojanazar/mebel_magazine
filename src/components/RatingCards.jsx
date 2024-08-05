import React from 'react'
import { s1, s2, s3, s4, s5, s6, s7, s8 } from '../assets/images/images'
import { Icon } from '@iconify/react'


const cardsInfo = [
  { rate: "5.0", img: s1, name: "Диван кожаный “R-94”", price: 94990 },
  { rate: "4.9", img: s2, name: "Диван апартековый “T-75”", price: 69990 },
  { rate: "4.8", img: s3, name: "Диван тканевый “D-31”", price: 28490 },
  { rate: "4.8", img: s4, name: "Диван велюровый “Y-68”", price: 22990 },
  { rate: "4.8", img: s5, name: "Диван кожаный “R-94”", price: 22990 },
  { rate: "4.8", img: s6, name: "Диван кожаный “R-94”", price: 17990 },
  { rate: "4.8", img: s7, name: "Диван кожаный “R-94”", price: 19900 },
  { rate: "4.7", img: s8, name: "Диван кожаный “R-94”", price: 19990 },
]

const RatingCards = () => {
  return (
    <div className='contain-pad' >
      <h1 className='font-normal text-3xl text-bleck'>Высокий рейтинг</h1>
      <div className='flex flex-wrap gap-8'>
        {cardsInfo.map((item) => (
          <div className='flex flex-col gap-5 bg-grey_light p-8 rounded-xl '>
            <div className='text-secondary' >
              <Icon icon="bi:star-fill" />
              <p>{item.rate}</p>
            </div>
            <div>
              <img src={item.img} alt="" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <button className='buy'>Купить</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RatingCards
