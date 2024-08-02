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
    height: 'auto',
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    height: 0,
    opacity: 0,
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
    <div className="relative z-50">
      <nav className='flex items-center justify-between bg-gray4 contain-pad py-3'>
        <ul className='flex items-center gap-5'>
          <li className='flex items-center gap-2'>
            <label className='text-bleck'>Ваш регион:</label>
            <select className='flex items-center bg-gray4 text-primary' name="" id="" >
              <option value="">Khorezm</option>
              <option value="">Tashkent</option>
            </select>
          </li>
          <li className='flex items-center gap-1 text-secondary'>
            <Icon className='w-8 h-6' icon="mdi:call" />
            <p>+7 (495) 885-45-47</p>
          </li>
        </ul>
        <ul className='flex items-center gap-16 text-grey'>
          <li><a href="">О компании</a></li>
          <li><a href="">Гарантия и возврат</a></li>
          <li><a href="">Корпоративным клиентам</a></li>
          <li><a href="">Дизайн-решение</a></li>
        </ul>
      </nav>
      <div className='flex items-center justify-between contain-pad py-8'>
        <img src={logo} alt="Logo" />
        <ul className='flex items-center gap-[91px] text-bleck'>
          <li><a href="">Каталог</a></li>
          <li><a href="">Магазины</a></li>
          <li><a href="">Шоу-рум</a></li>
          <li><a href="">Доставка и оплата</a></li>
          <li><a href="">Дисконт</a></li>
          <li><a href="">Контакты</a></li>
        </ul>
      </div>
      <div className='flex justify-between w-full contain-pad py-8'>
        <div className='relative flex items-center w-5/6'>
          <div className="relative w-full">
            <input 
              className='bg-grey_light placeholder:text-grey px-10 py-5 w-full rounded-[10px]' 
              type="search" 
              placeholder="Я хочу купить..."
              />
              <Icon className="absolute top-6 left-5  text-grey" icon="ri:search-line" />
          </div>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="absolute -top-0.5 -right-0.5 p-2 overflow-hidden min-w-80"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-primary rounded-ee-[10px] rounded-se-[10px] flex items-center justify-between w-full bg-white"
            >
              Категория
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
                className="inline-block ml-2"
              >
                <Icon className="w-7 h-7" icon="material-symbols-light:keyboard-arrow-down" />
              </motion.div>
            </motion.button>
            <motion.ul
              variants={menuVariants}
              className="bg-white space-y-2 mt-2 p-2 shadow-md rounded-md"
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              <motion.li variants={itemVariants} className="p-2 rounded text-primary">Item 1</motion.li>
              <motion.li variants={itemVariants} className="p-2 rounded text-primary">Item 2</motion.li>
              <motion.li variants={itemVariants} className="p-2 rounded text-primary">Item 3</motion.li>
              <motion.li variants={itemVariants} className="p-2 rounded text-primary">Item 4</motion.li>
              <motion.li variants={itemVariants} className="p-2 rounded text-primary">Item 5</motion.li>
            </motion.ul>
          </motion.nav>
        </div>
        <div className="flex justify-end items-center gap-8 w-1/6 text-primary">
          <button>
            <Icon className="w-8 h-7" icon="ant-design:user-outlined" />
          </button>
          <button className="relative flex gap-1">
            <Icon className="w-8 h-7" icon="ant-design:shopping-cart-outlined" />
            <p className="absolute bg-secondary right-[26px] w-3.5 top-1.5 text-[9px] text-white rounded-full">0</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
