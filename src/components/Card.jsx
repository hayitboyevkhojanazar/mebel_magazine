import React from 'react'
import { draw1, headSofa1 } from "../assets/images/images"
import NumberFormatter from './NumberFormatter'
const cardInfo = [
  { img: headSofa1, name: "Диван тканевый “Z-44”", price: 32990, discount: 10000, drawing: draw1 }
]

const Card = () => {
  return (
    <div>
      {cardInfo.map((item) => (
        <div className='w-fit bg-gray4 p-8'>
          <div>
            <img src={item.img} alt="" />
          </div>
          <div>
            <div>
              <div>
                <p className='font-normal text-2xl'>{item.name}</p>
              </div>
              <p>
                <span className='font-normal text-lg text-secondary'><NumberFormatter number={item.price - item.discount} /> руб</span>
                <span className=''><del><NumberFormatter number={item.price} />руб</del></span>
              </p>
              <button className='text-primary border border-primary px-9 py-5 rounded-[10px]'>Купить</button>
            </div>
            <div>
              <img src={item.drawing} alt="" />
            </div>
          </div>
        </div>
      )
      )}
    </div>
  )
}

export default Card