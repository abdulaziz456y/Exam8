import React, { useState, useEffect } from 'react';
import Next from '../assets/images/Next.png'
import Remove from '../assets/images/Remove.png'
import Vektor3 from '../assets/images/Vector3.png'
import Vektor4 from '../assets/images/Vector4.png'



const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className='w-[100%] h-[900px] bg-[#F8F7F3]'>
      <a href="/"><h1 className='ml-[77px] mt-[25px] absolute font-[600] text-[#7A7687]'>Главная</h1></a>
      <img className='ml-[150px] mt-[35px] absolute' src={Next} alt="" />
      <h1 className='ml-[170px] mt-[25px] absolute font-[600] text-black'>Корзина</h1>
      <div className=" mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 absolute mt-[100px] ml-[77px] w-[980px] rounded-[7px]">
        {cartItems.map((item) => (
          <div key={item.id} className="border h-[239px] rounded-[7px]">
            <div className='w-[320px] h-[237px] border bg-white rounded-[7px] '><button className='w-[77px] h-[27px] ml-[20px] border-[2px] border-[#088269] rounded-full bg-[#E1EFE6] text-[#088269] mt-[18px]'>Новинка</button><img  src={item.image} alt="" className="w-[159px] h-[159px] ml-[79px] mt-[10px]" /></div>
            <h2 className="text-lg font-semibold ml-[350px] mt-[-220px]">{item.name}</h2>
            <p className="text-gray-500 ml-[350px] mt-[20px]">
              ${item.price} x {item.quantity}
            </p>
            <div className="flex mt-[-20px] ml-[700px]">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)} 
                className="bg-[#088269] hover:bg-gray-400 text-white font-bold py-1 px-2 rounded-l"
              >
                -
              </button>
              <span className="bg-gray-100 py-1 px-3 border ">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="bg-[#088269] hover:bg-gray-400 text-white font-bold py-1 px-2 rounded-r"
              >
                +
              </button>
            </div>
            <a href="/katalog">
            <img className='absolute mt-[-80px] ml-[890px]' src={Vektor4} alt="" />
            <img className='absolute mt-[-80px] ml-[855px]' src={Vektor3} alt="" />
            </a>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="mt-[-90px] absolute bg-[#F8F7F3] border-[2px] hover:bg-gray-400 text-black font-bold py-2 px-2 rounded ml-[920px]"
            >
              <img src={Remove} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className='w-[320px] absolute h-[242px] rounded-[10px] bg-white mt-[100px] ml-[1100px]' >
      <h1 className='ml-[20px] mt-[15px] font-[600]'>Итого</h1>
      <hr className='w-[280px] h-[1px] ml-[20px] mt-[15px]' />
      <h1 className='font-[500] ml-[15px] mt-[15px] '>Товары:</h1>
      <h1 className='font-[500] ml-[15px] mt-[8px] '>Скидка:</h1>
      <h1 className='font-[500] ml-[260px] mt-[-25px] '>0 руб.</h1>
      <button className='w-[280px] h-[41px] ml-[15px] mt-[20px] bg-[#088269] text-white rounded-full'>Оформить заказ</button>
      <button className='w-[280px] h-[41px] ml-[15px] mt-[5px] bg-white border border-[#088269] text-[#088269] rounded-full'>Оформить заказ</button>
    </div>
    </div>
  );
};

export default CartPage;
