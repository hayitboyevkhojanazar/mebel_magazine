import React, { useState } from 'react';
import { chair, clock2, deer, draw1, draw2, headSofa1, headSofa2 } from '../assets/images/images';
import NumberFormatter from './NumberFormatter';
import { Icon } from '@iconify/react';

const cardInfo = [
  { img: chair, name: 'Кресло велюровое “X-24”', price: 24990, discount: 9000, },
  { img: headSofa1, name: 'Диван тканевый “Z-44”', price: 32990, discount: 10000, drawing: draw1 },
  { img: chair, name: 'Кресло велюровое “X-24”', price: 24990, discount: 9000, },
  { img: deer, name: 'Мини-скульптура "Oh my deer"', price: 990, discount: 300, },
  { img: headSofa2, name: 'Диван вел-флок “Z-85”', price: 32990, discount: 10000, drawing: draw2 },
  { img: clock2, name: 'Термометр + гидрометр "H-18"', price: 2090, discount: 700 }
];

const ITEMS_PER_PAGE = 3;

const SpecialCards = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardInfo.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedCards = cardInfo.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className='flex flex-col gap-7 contain-pad'>
      <div className='flex justify-between'>
        <h1 className='font-normal text-3xl text-bleck' >Специальные предложения</h1>
        <div className='flex gap-3' >
          <button
            onClick={handlePrevPage}
            className={`w-fit h-fit px-1 py-1 border ${currentPage === 1 ? 'border-grey' : 'border-primary'} text-white rounded-full`}
            disabled={currentPage === 1}
          >
            <Icon className={`h-6 w-6 ${currentPage === 1 ? 'text-grey' : 'text-primary'}`} icon="iconamoon:arrow-left-2-light"/>
          </button>
          <button
            onClick={handleNextPage}
            className={`w-fit h-fit px-1 py-1 border ${currentPage === totalPages ? 'border-grey' : 'border-primary'} text-white rounded-full`}
            disabled={currentPage === totalPages}
          >
            <Icon className={`h-6 w-6 ${currentPage === totalPages ? 'text-grey' : 'text-primary'}`} icon="iconamoon:arrow-right-2-light" />
          </button>
        </div>
      </div>
      <div className='flex justify-between gap-8'>
        {selectedCards.map((item, index) => (
          <div key={index} className='relative flex flex-col gap-4 justify-between w-fit bg-grey_light p-8 rounded-xl'>
            <div className="absolute left-0 flex px-3 py-1 text-white w-full bg-no-repeat h-full bg-[url('assets/images/bgDiscount.png')]">
              <span>-{item.discount}</span>
            </div>
            <div className='flex justify-center pt-10'>
              <img src={item.img} alt="" />
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex gap-20'>
                <div className='flex flex-col gap-5'>
                  <div>
                    <p className='font-normal text-2xl text-bleck max-w-52'>{item.name}</p>
                  </div>
                  <p className='flex items-center justify-between'>
                    <span className='flex gap-1 font-normal text-lg text-secondary'>
                      <NumberFormatter number={item.price - item.discount} /> руб
                    </span>
                    <del className='flex gap-1 font-normal text-grey'>
                      <NumberFormatter number={item.price} /> руб
                    </del>
                  </p>
                </div>
                {item.drawing && (
                  <div className='flex items-end'>
                    <img src={item.drawing} alt="" />
                  </div>
                )}
              </div>
              <button className='buy'>Купить</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SpecialCards;
