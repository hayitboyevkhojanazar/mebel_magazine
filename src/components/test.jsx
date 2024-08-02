import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import logo from '../assets/logo.svg';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const menuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className='flex items-center justify-between bg-gray4 contain-pad py-3'>
        <ul className='flex items-center gap-5'>
          <li className='flex items-center gap-2'>
            <label className='text-black'>Ваш регион:</label>
            <select className='flex items-center bg-gray4 text-pink2' name="" id="" >
              <option value="">Khorezm</option>
              <option value="">Tashkent</option>
            </select>
          </li>
          <li className='flex items-center gap-1 text-orange2'>
            <Icon className='w-8 h-6' icon="mdi:call" />
            <p>+7 (495) 885-45-47</p>
          </li>
        </ul>
        <ul className='flex items-center gap-16 text-gray2'>
          <li><a href="">О компании</a></li>
          <li><a href="">Гарантия и возврат</a></li>
          <li><a href="">Корпоративным клиентам</a></li>
          <li><a href="">Дизайн-решение</a></li>
        </ul>
      </nav>
      <div className='flex items-center justify-between contain-pad py-8'>
        <img src={logo} alt="Logo" />
        <ul className='flex items-center gap-[91px] text-black'>
          <li><a href="">Каталог</a></li>
          <li><a href="">Магазины</a></li>
          <li><a href="">Шоу-рум</a></li>
          <li><a href="">Доставка и оплата</a></li>
          <li><a href="">Дисконт</a></li>
          <li><a href="">Контакты</a></li>
        </ul>
      </div>
      <div className='contain-pad py-8'>
        <div className='flex'>
          <input className='bg-gray4 placeholder:text-gray2 px-8 py-5 w-full' type="search" placeholder='Я хочу купить...' />
          <div className='flex'>
            <select className='flex items-center bg-white border-[3px] min-w-[300px] border-gray4 text-pink2 px-8' name="" id="" >
              <option value="">Khorezm</option>
              <option value="">Tashkent</option>
            </select>
          </div>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="bg-gray-800 rounded-lg shadow-lg w-64 mx-auto mt-20 overflow-hidden"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-blue-500 text-white rounded flex items-center justify-between w-full"
            >
              Menu
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
                className="inline-block ml-2"
              >
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </motion.div>
            </motion.button>
            <motion.ul
              variants={menuVariants}
              className="mt-4 space-y-2"
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              <motion.li variants={itemVariants} className="p-2 bg-gray-700 rounded text-white">Item 1</motion.li>
              <motion.li variants={itemVariants} className="p-2 bg-gray-700 rounded text-white">Item 2</motion.li>
              <motion.li variants={itemVariants} className="p-2 bg-gray-700 rounded text-white">Item 3</motion.li>
              <motion.li variants={itemVariants} className="p-2 bg-gray-700 rounded text-white">Item 4</motion.li>
              <motion.li variants={itemVariants} className="p-2 bg-gray-700 rounded text-white">Item 5</motion.li>
            </motion.ul>
          </motion.nav>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
